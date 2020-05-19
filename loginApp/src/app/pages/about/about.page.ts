import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
    selector: 'app-about',
    templateUrl: './about.page.html',
    styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
    capturedSnapURL: string;
    cameraOptions: CameraOptions;
    photos = [];

    constructor(
        public actionSheetController: ActionSheetController,
        private camera: Camera
    ) { }

    ngOnInit() { }

    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Options',
            buttons: [
                {
                    text: 'Camera',
                    icon: 'camera',
                    handler: () => {
                        this.getPhoto(1);
                    }
                },
                {
                    text: 'Album',
                    icon: 'albums',
                    handler: () => {
                        this.getPhoto(2);
                    }
                },
                {
                    text: 'Cancel',
                    icon: 'close',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        await actionSheet.present();
    }

    getPhoto(value) {
        this.cameraOptions = {
            quality: 20,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: value == 1 ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY
        }
        this.camera.getPicture(this.cameraOptions).then((imageData) => {
            debugger
            // this.camera.DestinationType.FILE_URI gives file URI saved in local
            // this.camera.DestinationType.DATA_URL gives base64 URI

            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.capturedSnapURL = base64Image;

            this.photos.push({ key: this.capturedSnapURL });

        }, (err) => {

            console.log(err);
            // Handle error
        });
    }
}
