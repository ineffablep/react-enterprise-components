``` json
{
  "navbarClassName": "w3-deep-orange w3-text-white  w3-padding",
  "mobileNavClassName": "",
  "navbarCloseButtonClassName": "",
  "logo": {
    "link": {
      "path": "/",
      "className": ""
    },
    "image": {
      "src": "",
      "alt": "Company Name",
      "className": ""
    }
  },
  "toggleNav": {
    "title": "Show / Hide Menu",
    "icon": "",
    "className": ""
  },
  "leftLinks": {
    "className": "",
    "links": [
      {
        "path": "/",
        "text": "Home",
        "title": "",
        "links": [],
        "metas": [],
        "className": "w3-hover-none",
        "activeClassName": "",
        "json": []
      },
      {
        "path": "/resources",
        "className": "w3-hover-none",
        "text": "Resources",
        "children": [
          {
            "path": "/whitepapers",
            "text": "Whitepapers"
          },
          {
            "path": "/dataSheets",
            "text": "DataSheets"
          },
          {
            "path": "/caseStudies",
            "text": "Case Studies"
          },
          {
            "path": "/videos",
            "text": "Videos"
          },
          {
            "path": "/webcasts",
            "text": "Webcasts"
          },
          {
            "path": "/prodcasts",
            "text": "Prodcasts"
          },
          {
            "path": "/infographics",
            "text": "Infographics"
          },
          {
            "path": "/events",
            "text": "Events"
          }
        ]
      },
      {
        "path": "/about",
        "className": "w3-hover-none",
        "text": "About Us",
        "children": [
          {
            "path": "/company",
            "text": "Company"
          },
          {
            "path": "/leadership",
            "text": "Leadership"
          },
          {
            "path": "/partners",
            "text": "Partners"
          },
          {
            "path": "/careers",
            "text": "Careers"
          },
          {
            "path": "/investor",
            "text": "Investor Relations"
          },
          {
            "path": "/press",
            "text": "Press"
          },
          {
            "path": "/news",
            "text": "News"
          },
          {
            "path": "/blog",
            "text": "Blogs"
          }
        ]
      },
      {
        "path": "/contact",
        "text": "Contact Us",
        "className": "w3-hover-none",
        "children": []
      },
      {
        "path": "/examples",
        "className": "w3-hover-none",
        "text": "Examples",
        "json": [
          {
            "component": "Panel",
            "panelText": "Test Panel",
            "className": "w3-red"
          },
          {
            "component": "Panel",
            "panelText": "Test Notes",
            "className": "w3-yellow w3-leftbar w3-rightbar w3-border-red"
          },
          {
            "component": "div",
            "className": "w3-img"
          },
          {
            "component": "Alert",
            "alertText": "Test Alert",
            "className": "w3-red w3-leftbar w3-rightbar w3-border-red"
          },
          {
            "component": "Spin"
          },
          {
            "component": "SlideShow",
            "className": "w3-responsive",
            "automatic": false,
            "timeOut": 2000,
            "slides": [
              {
                "component": "Image",
                "src": "https://www.w3schools.com/w3css/img_fjords.jpg",
                "alt": "Northern Light",
                "className": "w3-responsive",
                "content": [
                  {
                    "component": "div",
                    "text": "Mountains",
                    "className": "w3-display-bottomleft w3-large w3-container w3-padding-16 w3-black"
                  }
                ]
              },
              {
                "component": "Image",
                "src": "https://www.w3schools.com/w3css/img_lights.jpg",
                "alt": "Northern Light",
                "className": "w3-responsive"
              },
              {
                "component": "Image",
                "src": "https://www.w3schools.com/w3css/img_mountains.jpg",
                "alt": "The Mountains",
                "className": "w3-responsive"
              },
              {
                "component": "Image",
                "src": "https://www.w3schools.com/w3css/img_forest.jpg",
                "alt": "The Rain Forest",
                "className": "w3-responsive"
              }
            ]
          },
          {
            "component": "PercentageStats",
            "className": "w3-center",
            "heading": "My Skills",
            "content": [
              {
                "icon": "fa fa-camera",
                "text": "Photography",
                "className": "w3-black",
                "percent": "90"
              },
              {
                "icon": "fa fa-laptop",
                "text": "Web Design",
                "className": "w3-black",
                "percent": "60"
              },
              {
                "icon": "fa fa-photo",
                "text": "Photoshop",
                "className": "w3-black",
                "percent": 100
              }
            ]
          },
          {
            "component": "NumberStats",
            "className": "w3-dark-grey",
            "content": [
              {
                "className": "",
                "text": "Partners",
                "number": "14"
              },
              {
                "className": "",
                "text": "Projects Done",
                "number": "55"
              },
              {
                "className": "",
                "text": "Happy Clients",
                "number": "89"
              },
              {
                "className": "",
                "text": "Meetings",
                "number": "150"
              }
            ]
          }
        ]
      }
    ]
  },
  "rightLinks": {
    "className": "",
    "links": [
      {
        "path": "/register",
        "text": "Register",
        "className": "w3-hover-none",
        "json": [
          {
            "component": "Form",
            "saveUrl": "http://localhost:56772/api/values",
            "schema": {
              "children": [
                {
                  "component": "BaseInput",
                  "props": {
                    "labelText": "Your Name",
                    "placeholder": "Full Name",
                    "required": "true",
                    "id": "fullName",
                    "validateOn": "onChange",
                    "validateRules": [
                      {
                        "rule": "required",
                        "message": "Full name field  is required"
                      }
                    ]
                  }
                },
                {
                  "component": "BaseInput",
                  "props": {
                    "labelText": "Email Address",
                    "placeholder": "Email",
                    "required": "true",
                    "id": "email",
                    "validateOn": "onChange",
                    "validateRules": [
                      {
                        "rule": "required",
                        "message": "Email address field is required"
                      }
                    ]
                  }
                },
                {
                  "component": "BaseInput",
                  "props": {
                    "labelText": "Mobile Number",
                    "placeholder": "Mobile Number",
                    "required": "true",
                    "id": "phoneNumber",
                    "validateOn": "onChange",
                    "validateRules": [
                      {
                        "rule": "required",
                        "message": "Mobile Number field is required"
                      }
                    ]
                  }
                },
                {
                  "component": "BaseInput",
                  "props": {
                    "labelText": "Password",
                    "placeholder": "Password",
                    "required": "true",
                    "id": "password",
                    "type": "password",
                    "validateOn": "onChange",
                    "validateRules": [
                      {
                        "rule": "required",
                        "message": "Password is required"
                      }
                    ]
                  }
                },
                {
                  "component": "Button",
                  "props": {
                    "buttonText": "Register",
                    "className": "w3-hover-green"
                  }
                }
              ]
            }
          }
        ]
      },
      {
        "path": "/login",
        "className": "w3-hover-none",
        "text": "Login",
        "json": [
          {
            "component": "h2",
            "className": "w3-center",
            "text": "Sign in"
          },
          {
            "component": "Image",
            "className": "w3-container w3-half w3-hide-small",
            "src": "https://www.intel.com/content/dam/www/public/us/en/images/photography-consumer/16x9/authenticate-hero-image-16x9.jpg",
            "alt": "Authenticate"
          },
          {
            "component": "div",
            "className": "w3-container w3-half",
            "children": [
              {
                "component": "Form",
                "schema": {
                  "children": [
                    {
                      "component": "BaseInput",
                      "props": {
                        "labelText": "Email or Phone",
                        "placeholder": "Phone number or Email address",
                        "required": "true",
                        "id": "userName",
                        "validateOn": "onChange",
                        "validateRules": [
                          {
                            "rule": "required",
                            "message": "Phone number or Email address is required"
                          }
                        ]
                      }
                    },
                    {
                      "component": "BaseInput",
                      "props": {
                        "labelText": "Password",
                        "placeholder": "Password",
                        "required": "true",
                        "id": "password",
                        "type": "password",
                        "validateOn": "onChange",
                        "validateRules": [
                          {
                            "rule": "required",
                            "message": "Password is required"
                          }
                        ]
                      }
                    },
                    {
                      "component": "Checkbox",
                      "props": {
                        "labelText": "Remember me",
                        "type": "checkbox",
                        "labelClass": "w3-margin-right",
                        "id": "rememberMe"
                      }
                    },
                    {
                      "component": "Button"
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    ]
  },
  "footer": {
    "className": "w3-black",
    "children": [
      {
        "component": "h2",
        "className": "w3-container",
        "text": "Hello I am footer"
      }
    ]
  }
}
```