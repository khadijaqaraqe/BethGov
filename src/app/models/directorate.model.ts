export class Directorate {

    id: string;
    title: string;
    director: string;
    pageurl: string;
    location: string;
    phoneNumbers: [
      {
        number1: number;
        number2: number;
        fax: number;
      }
    ];
    socialLinks:  [
      {
        facebook: string;
        instagram: string;
        twitter: string;
        linkedin: string;
        whatsapp: string;
        youtube: string;
      }
    ];
    GoogleMapLocation: string;
    images: [
      {
        url: string;
        "alt-text": string;
      }
    ]

}
