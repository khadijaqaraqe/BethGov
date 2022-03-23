const express  = require('express');
const bodyParser = require("body-parser");
//ig2Qi90otfaBwbGA
const mongoose = require('mongoose');

const Article = require('./models/article');
const Complaint = require('./models/complaint');
const Directorate = require('./models/directorate');
const Partner = require('./models/partners');

const app = express();

mongoose.connect('mongodb+srv://khadija:ig2Qi90otfaBwbGA@cluster0.m7qfi.mongodb.net/BethlehemGovern?retryWrites=true&w=majority')
    .then(() => {
      console.log('Connected Successfully');
    })
    .catch(() => {
      console.log('connection failed ');
    });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get('/api/articles', (req, res, next) => {
  const articles = [
      {
        id: 1,
        author: "xx",
        title: "التقى المحافظ حميد معالي الوزير د. رمزي خوري رئيس اللجنة الرئاسية العليا لمتابعة شؤون الكنائس في فلسطين",
        text: "التقى المحافظ حميد معالي الوزير د. رمزي خوري رئيس اللجنة الرئاسية العليا لمتابعة شؤون الكنائس في فلسطين...",
        date: " December 17, 2021",
        time: "15:40:13",
        category: "المحافظ",
        type: "news",
        images: [
          {
            url: "https://www.bethlehem.edu/wp-content/uploads/2020/10/2020-02-01-Arab-World-Books.jpg",
            "alt-text": "التقى المحافظ حميد معالي الوزير د. رمزي خوري"
          }
        ]
      },
      {
        id: 2,
        author: "xx",
        title: "شارك رئيس وحدة العلاقات العامة والاعلام بالمحافظة د. لؤي زعول في فعاليات مؤتمر حركة فتح بعنوان: الفكر السياسي والاجتماعي للحركة",
        text: "شارك رئيس وحدة العلاقات العامة والاعلام بالمحافظة د. لؤي زعول في فعاليات مؤتمر حركة فتح بعنوان: الفكر السياسي والاجتماعي للحركة...",
        date: " December 18, 2021",
        time: "14:25:41",
        category: "العلاقات العامة",
        type: "news",
        images: [
          {
            url: "https://english.wafa.ps/image/NewsThumbImg/Default/a8516180-f53a-44e2-b70b-82663af565af.jpg",
            "alt-text": "شارك رئيس وحدة العلاقات العامة والاعلام.."
          }
        ]
      },
      {
        id: 3,
        author: "xx",
        title: "جمعية ابناء بيت ساحور الخيرية تكرم المحافظ اللواء كامل حميد محافظ بيت لحم لما يقدمه من جهود وعطاء",
        text: "جمعية ابناء بيت ساحور الخيرية تكرم المحافظ اللواء كامل حميد محافظ بيت لحم لما يقدمه من جهود وعطاء... ",
        date: " December 19, 2021",
        time: "10:23:21",
        category: "المحافظ",
        type: "news",
        images: [
          {
            url: "https://www.bethlehem.edu/wp-content/uploads/2020/10/Twal-visit-governor-2-1200x600.jpg",
            "alt-text": "جمعية ابناء بيت ساحور الخيرية.."
          }
        ]
      },
      {
        id: 4,
        author: "xx",
        title: "جمعية ابناء بيت ساحور الخيرية تكرم المحافظ اللواء كامل حميد محافظ بيت لحم لما يقدمه من جهود وعطاء",
        text: "جمعية ابناء بيت ساحور الخيرية تكرم المحافظ اللواء كامل حميد محافظ بيت لحم لما يقدمه من جهود وعطاء... ",
        date: " December 20, 2021",
        time: "11:23:21",
        category: "المحافظ",
        type: "news",
        images: [
          {
            url: "data:image/jpeg;base64,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",
            "alt-text": "جمعية ابناء بيت ساحور الخيرية.."
          }
        ]
      },
      {
        id: 5,
        author: "xx",
        title: "جمعية ابناء بيت ساحور الخيرية تكرم المحافظ اللواء كامل حميد محافظ بيت لحم لما يقدمه من جهود وعطاء",
        text: "جمعية ابناء بيت ساحور الخيرية تكرم المحافظ اللواء كامل حميد محافظ بيت لحم لما يقدمه من جهود وعطاء... ",
        date: " December 19, 2021",
        time: "10:23:21",
        category: "المحافظ",
        type: "news",
        images: [
          {
            url: "https://english.wafa.ps/image/NewsThumbImg/Default/a8516180-f53a-44e2-b70b-82663af565af.jpg",
            "alt-text": "جمعية ابناء بيت ساحور الخيرية.."
          }
        ]
      }

  ];

  return res.status(200).json({
    message:"fetch successfully",
    articles: articles
  });
});

app.post('/api/articles', (req, res, next) => {
  const article = new Article({
    author: req.body.author,
    creator: req.body.creator,
    title: req.body.title,
    text: req.body.text,
    date:  req.body.date,
    time: req.body.time,
    category: req.body.category,
    type: req.body.type,
    images: [
      {
        url: req.body.url,
        "alt-text": req.body.alt-text
      }
    ]
  });
  console.log(article);
  article.save();
  res.status(201).json({
    message: 'article added successfully'
  });
  next();
});

app.post('/api/partners', (req, res, next) => {
  const partner = new Partner({
    title:  req.body.title,
    pageurl: req.body.pageurl,
    images: [
      {
        url: req.body.url,
        "alt-text":req.body.alt-text
      }
    ]
  });
  console.log(partner);
  partner.save();
  res.status(201).json({
    message: 'partner added successfully'
  });
  next();
});

app.post('/api/complaint', (req, res, next) => {
  const complaint = new Complaint({
    creatorName: req.body.creatorName,
    IdNumber: req.body.IdNumber,
    PhoneNumber: req.body.PhoneNumber,
    Topic: req.body.Topic,
    ComplaintAssociation: req.body.ComplaintAssociation,
    Text: req.body.Text,
    date:  req.body.date,
    time:  req.body.time
  });
  console.log(complaint);
  complaint.save();
  res.status(201).json({
    message: 'complaint added successfully'
  });
  next();
});

app.post('/api/directorate', (req, res, next) => {
  const directorate = new Directorate({
    title: req.body.title,
    director: req.body.director,
    pageurl: req.body.pageurl,
    location:  req.body.location,
    phoneNumbers: [
      {
        number1: req.body.number1,
        number2: req.body.number2,
        fax: req.body.fax
      }
    ],
    socialLinks:  [
      {
        facebook: req.body.facebook,
        instagram: req.body.instagram,
        twitter: req.body.twitter,
        linkedin: req.body.linkedin,
        whatsapp: req.body.whatsapp,
        youtube: req.body.youtube,
      }
    ],
    GoogleMapLocation: req.body.GoogleMapLocation,
    images: [
      {
        url: req.body.url,
        "alt-text": req.body.alt-text
      }
    ]
  });
  console.log(directorate);
  directorate.save();
  res.status(201).json({
    message: 'directorate added successfully'
  });
  next();
});

app.use('/api/partners', (req, res, next) => {
  const partners = [



    {
      id: 1,
      title: "مجلس الوزراء",
      pageurl: "http://www.palestinecabinet.gov.ps/",
      images: [
        {
          url: "../../assets/img/partners/ministers-council.png",
          "alt-text": "مجلس الوزراء"
        }
      ]
    },
    {
      id: 2,
      title: "وزارة السياحة والآثار",
      pageurl: "https://tourism.ps/",
      images: [
        {
          url: "../../assets/img/partners/tourism-logo.png",
          "alt-text": " وزارة السياحة والآثار"
        }
      ]
    },
    {
      id: 3,
      title: "وزارة العدل",
      pageurl: "http://www.moj.pna.ps/",
      images: [
        {
          url: "../../assets/img/partners/justice-logo.png",
          "alt-text": "وزارة العدل"
        }
      ]
    },
    {
      id: 4,
      title: "وزارة التنمية الاجتماعية",
      pageurl: "https://www.mosa.gov.ps/",
      images: [
        {
          url: "../../assets/img/partners/social-development-logo.jpg",
          "alt-text": "وزارة التنمية الاجتماعية"
        }
      ]
    },
    {
      id: 5,
      title: "وزارة الخارجية وشؤون المغتربين",
      pageurl: "http://www.mofa.pna.ps/ar-jo/",
      images: [
        {
          url: "../../assets/img/partners/MOFA_logo.png",
          "alt-text": "وزارة الخارجية وشؤون المغتربين"
        }
      ]
    },
    {
      id: 6,
      title: "وزارة الحكم المحلي",
      pageurl: "https://www.molg.pna.ps/",
      images: [
        {
          url: "../../assets/img/partners/local-logo.png",
          "alt-text": "وزارة الحكم المحلي"
        }
      ]
    },
    {
      id: 7,
      title: "وزارة العمل",
      pageurl: "http://www.mol.pna.ps/",
      images: [
        {
          url: "../../assets/img/partners/labour-logo.png",
          "alt-text": "وزارة العمل"
        }
      ]
    },
    {
      id: 8,
      title: "وزارة المالية",
      pageurl: "http://www.pmof.ps/",
      images: [
        {
          url: "../../assets/img/partners/finance-logo.png",
          "alt-text": "وزارة المالية"
        }
      ]
    },
    {
      id: 9,
      title: "وزارة النقل والمواصلات",
      pageurl: "http://www.mot.gov.ps/",
      images: [
        {
          url: "../../assets/img/partners/transport-logo.png",
          "alt-text": "وزارة النقل والمواصلات"
        }
      ]
    },
    {
      id: 10,
      title: "وزارة الصحة",
      pageurl: "https://www.site.moh.ps/",
      images: [
        {
          url: "../../assets/img/partners/health-logo.png",
          "alt-text": "وزارة الصحة"
        }
      ]
    },
    {
      id: 11,
      title: "وزارة شؤون المرأة",
      pageurl: "https://www.mowa.pna.ps/",
      images: [
        {
          url: "../../assets/img/partners/women-logo.png",
          "alt-text": "وزارة شؤون المرأة"
        }
      ]
    },
    {
      id: 12,
      title: "وزارة الزراعة",
      pageurl: "https://www.moa.pna.ps/",
      images: [
        {
          url: "../../assets/img/partners/agriculture-logo.png",
          "alt-text": "وزارة الزراعة"
        }
      ]
    }




  ];

  return res.status(200).json({
    message:"fetch successfully",
    partners: partners
  });
});

app.use('/api/complaint', (req, res, next) => {
  const complaint = [];

  return res.status(200).json({
    message:"fetch successfully",
    complaint: complaint
  });
});

app.use('/api/directorate', (req, res, next) => {
  const directorate = [


    {
      id: 1,
      title: "مديرية التربية والتعليم",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 2,
      title: "مديرية التنمية الاجتماعية",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 3,
      title: "مديرية الصحة",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 4,
      title: "مديرية الحكم المحلي",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 5,
      title: "مديرية الاقتصاد الوطني",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 6,
      title: "مديرية الزراعة",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 7,
      title: "مديرية وزارة العمل",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 8,
      title: "مديرية الاقتصاد الوطني",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 9,
      title: "مديرية النقل والمواصلات",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 10,
      title: "",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 11,
      title: "",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 12,
      title: "",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 13,
      title: "",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 14,
      title: "",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 15,
      title: "",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 16,
      title: "",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 17,
      title: "",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 18,
      title: "",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 19,
      title: "",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 20,
      title: "",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
           number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 21,
      title: "",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 22,
      title: "",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 23,
      title: "",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
           number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    },
    {
      id: 24,
      title: "",
      director: "",
      pageurl: "",
      location: "",
      phoneNumbers: [
        {
          number1: "",
          number2: ""
        }
      ],
      socialLinks:  [
        {
          facebook: "",
          instagram: "",
          twitter: "",
          linkedin: "",
          whatsapp: "",
          youtube: ""
        }
      ],
      GoogleMapLocation: "",
      images: [
        {
          url: "",
          "alt-text": ""
        }
      ]
    }


  ];

  return res.status(200).json({
    message:"fetch successfully",
    directorate: directorate
  });
});

module.exports = app;
