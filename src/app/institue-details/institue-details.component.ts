import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedServicesService } from '../shared/services/shared-services.service';

@Component({
  selector: 'app-institue-details',
  templateUrl: './institue-details.component.html',
  styleUrls: ['./institue-details.component.sass']
})
export class InstitueDetailsComponent implements OnInit {
  imageSrc;
  logoButtonValue;
  broucherFiles;
  certificateFiles: any;
  galleryFiles: any;
  isError = false;
  isSubmit = false;
  institueDetailsForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    brouchers: new FormControl(''),
    certificates: new FormControl(''),
    courseGalleryFile: new FormControl('', [Validators.required])
  });
  reader = new FileReader();
  constructor(private router: Router, private sharedService: SharedServicesService) { }

  ngOnInit() {
    this.logoButtonValue = 'CHANGE';
    this.imageSrc = '../../assets/images/ic_logoiid.png';
  }

  onLogoUpload(event) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.reader.readAsDataURL(file);
      this.reader.onload = () => {
        this.imageSrc = this.reader.result as string;
      };
    }
  }

  onBroucherUpload(event) {
    if (event.target.files && event.target.files.length) {
      this.broucherFiles = event.target.files;
    }
  }

  onCertificateUpload(event) {
    if (event.target.files && event.target.files.length) {
      this.certificateFiles = event.target.files;
    }
  }

  onGalleryUpload(event) {
    if (event.target.files && event.target.files.length) {
      this.galleryFiles = event.target.files;
    }
  }

  onNextClick() {
    if (!this.institueDetailsForm.valid) {
      this.isSubmit = true;
      this.isError = true;
    } else {
      this.sharedService.pageProgressBar.emit(80);
      this.router.navigate(['course-detail']);
    }
  }

  changeErrorStyle() {
    if (this.isSubmit) {
      const styles = {
        color: this.institueDetailsForm.valid ? '#17073D' : '#E02020'
      };
      return styles;
    }
  }
}
