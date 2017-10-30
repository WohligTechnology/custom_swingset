myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.mousedown = false;
        $scope.mySlides = [
            'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
        ];
        var abc = _.times(100, function (n) {
            return n;
        });
        var i = 0;
        $scope.buttonClick = function () {
            i++;
            console.log("This is a button Click");
        };
        //array for background icon select
        $scope.select_b = [];
        //json for frame details
        // $scope.custom_swingList = [{
        //         frame: "Single Frame",
        //         img: "img/frame/f1.png",
        //         trim: [{
        //             name: "Lime Trim",
        //             img: "img/frame/f1.png",
        //             color: "#d5ec5f",
        //         }, {
        //             name: "Teal Trim",
        //             img: "img/frame/f1_2.png",
        //             color: "#2592a0"

        //         }],
        //         swing: [{
        //                 name: "2 Seat Glider",
        //                 img: "img/frame/f1_swing1_0.png"
        //             }, {
        //                 name: "Climbing ladder",
        //                 img: "img/frame/f1_swing1_1.png",
        //                 disabled: true
        //             }, {
        //                 name: "Single Swing",
        //                 img: "img/frame/f1_swing1_2.png"
        //             },
        //             {
        //                 name: "Trapeze Swing",
        //                 img: "img/frame/f1_swing1_3.png"
        //             }
        //         ]
        //     } //end of first frame
        //     , {
        //         frame: "Double Frame",
        //         img: "img/frame/frame2/f2.png",
        //         trim: [{
        //             name: "Lime Trim",
        //             img: "img/frame/frame2/f2.png",
        //             color: "#d5ec5f",
        //         }, {
        //             name: "Teal Trim",
        //             img: "img/frame/frame2/f2_2.png",
        //             color: "#2592a0"
        //         }],
        //         swing: [{
        //                 name: "2 Seat Glider",
        //                 img: "img/frame/frame2/swing1_0.png"
        //             },
        //             {
        //                 name: "Ball Buoy",
        //                 img: "img/frame/frame2/swing1_1.png"
        //             },
        //             {
        //                 name: "Climbing Ladder",
        //                 img: "img/frame/frame2/swing1_2.png"
        //             },
        //             {
        //                 name: "Nest Swing",
        //                 img: "img/frame/frame2/swing1_3.png",
        //                 hidenext: true
        //             },
        //             {
        //                 name: "Single Swing",
        //                 img: "img/frame/frame2/swing1_4.png",
        //             }, {
        //                 name: "Trapeze Swing",
        //                 img: "img/frame/frame2/swing1_5.png",
        //             }
        //         ],
        //         swing2: [{
        //                 name: "2 Seat Glider",
        //                 img: "img/frame/frame2/swing2_0.png"
        //             }, {
        //                 name: "Ball Buoy",
        //                 img: "img/frame/frame2/swing2_1.png"
        //             }, {
        //                 name: "Climbing Ladder",
        //                 img: "img/frame/frame2/swing2_2.png"
        //             },
        //             {
        //                 name: "Single Swing",
        //                 img: "img/frame/frame2/swing2_3.png",
        //             },
        //             {
        //                 name: "Trapeze Swing",
        //                 img: "img/frame/frame2/swing2_4.png",
        //             }
        //         ]
        //     }
        //     //end of frame 2
        //     ,
        //     {
        //         frame: "Triple Frame",
        //         img: "img/frame/frame3/f3.png",
        //         trim: [{
        //             name: "Lime Trim",
        //             img: "img/frame/frame3/f3.png",
        //             color: "#d5ec5f",
        //         }, {
        //             name: "Teal Trim",
        //             img: "img/frame/frame3/f3_2.png",
        //             color: "#2592a0"

        //         }],
        //         swing: [{
        //                 name: "2 Seat Glider",
        //                 img: "img/frame/frame3/swing1_0.png"
        //             },
        //             {
        //                 name: "Ball Buoy",
        //                 img: "img/frame/frame3/swing1_1.png"
        //             },
        //             {
        //                 name: "Climbing Ladder",
        //                 img: "img/frame/frame3/swing1_2.png"
        //             },
        //             {
        //                 name: "Nest Swing",
        //                 img: "img/frame/frame3/swing1_3.png",
        //                 hidenext: true
        //             },
        //             {
        //                 name: "Single Swing",
        //                 img: "img/frame/frame3/swing1_4.png",
        //             }, {
        //                 name: "Trapeze Swing",
        //                 img: "img/frame/frame3/swing1_5.png",
        //             }
        //         ],
        //         swing2: [{
        //                 name: "2 Seat Glider",
        //                 img: "img/frame/frame3/swing2_0.png"
        //             },
        //             {
        //                 name: "Ball Buoy",
        //                 img: "img/frame/frame3/swing2_1.png"
        //             },
        //             {
        //                 name: "Climbing Ladder",
        //                 img: "img/frame/frame3/swing2_2.png"
        //             },
        //             {
        //                 name: "Nest Swing",
        //                 img: "img/frame/frame3/swing2_3.png",
        //                 hidenext: true
        //             },
        //             {
        //                 name: "Single Swing",
        //                 img: "img/frame/frame3/swing2_4.png",
        //             },
        //             {
        //                 name: "Trapeze Swing",
        //                 img: "img/frame/frame3/swing2_5.png",
        //             }
        //         ],
        //         swing3: [{
        //                 name: "2 Seat Glider",
        //                 img: "img/frame/frame3/swing3_0.png"
        //             }, {
        //                 name: "Ball Buoy",
        //                 img: "img/frame/frame3/swing3_1.png"
        //             }, {
        //                 name: "Climbing Ladder",
        //                 img: "img/frame/frame3/swing3_2.png"
        //             },
        //             {
        //                 name: "Single Swing",
        //                 img: "img/frame/frame3/swing3_3.png",
        //             },
        //             {
        //                 name: "Trapeze Swing",
        //                 img: "img/frame/frame3/swing3_4.png",
        //             }
        //         ]

        //     }
        //     //end of frame 3
        //     ,
        //     {
        //         frame: "Double Frame With Slide Deck",
        //         img: "img/frame/frame4/f4.png",
        //         trim: [{
        //             name: "Lime Trim",
        //             img: "img/frame/frame4/f4.png",
        //             color: "#d5ec5f",
        //         }, {
        //             name: "Teal Trim",
        //             img: "img/frame/frame4/f4_2.png",
        //             color: "#2592a0"

        //         }],
        //         slide: [{
        //             name: "Lime Slide",
        //             img: "img/frame/frame4/f4_slide1.png",
        //             color: "#739b50",
        //         }, {
        //             name: "Turquoise Slide",
        //             img: "img/frame/frame4/f4_slide2.png",
        //             color: "#91cedd"

        //         }],
        //         swing: [{
        //                 name: "2 Seat Glider",
        //                 img: "img/frame/frame4/swing1_0.png"
        //             },
        //             {
        //                 name: "Ball Buoy",
        //                 img: "img/frame/frame4/swing1_1.png"
        //             },
        //             {
        //                 name: "Climbing Ladder",
        //                 img: "img/frame/frame4/swing1_2.png"
        //             },
        //             {
        //                 name: "Nest Swing",
        //                 img: "img/frame/frame4/swing1_3.png",
        //                 hidenext: true
        //             },
        //             {
        //                 name: "Single Swing",
        //                 img: "img/frame/frame4/swing1_4.png",
        //             }, {
        //                 name: "Trapeze Swing",
        //                 img: "img/frame/frame4/swing1_5.png",
        //             }
        //         ],
        //         swing2: [{
        //                 name: "2 Seat Glider",
        //                 img: "img/frame/frame4/swing2_0.png"
        //             }, {
        //                 name: "Ball Buoy",
        //                 img: "img/frame/frame4/swing2_1.png"
        //             }, {
        //                 name: "Climbing Ladder",
        //                 img: "img/frame/frame4/swing2_2.png"
        //             },
        //             {
        //                 name: "Single Swing",
        //                 img: "img/frame/frame4/swing2_3.png",
        //             },
        //             {
        //                 name: "Trapeze Swing",
        //                 img: "img/frame/frame4/swing2_4.png",
        //             }
        //         ]
        //     }
        // ]


        $scope.custom_swingList = [{
                frame: "Single Frame",
                img: "img/frame/frame1/lime/frame.png",
                icon: "img/frame/frame1/lime/frame_icon.png",
                trim: [{
                    name: "Lime Trim",
                    img: "img/frame/frame1/lime/frame.png",
                    color: "#d5ec5f",
                    swing: [{
                            name: "2 Seat Glider",
                            img: "img/frame/frame1/lime/seat_glider.png",
                            icon: "img/frame/frame1/lime/seat_glider_icon.png"
                        },
                        {
                            name: "Climbing ladder",
                            img: "img/frame/frame1/lime/ladder.png",
                            icon: "img/frame/frame1/lime/ladder_icon.png",
                            disabled: true
                        },
                        {
                            name: "Single Swing",
                            img: "img/frame/frame1/lime/single_s.png",
                            icon: "img/frame/frame1/lime/single_s_icon.png"
                        },
                        {
                            name: "Trapeze Swing",
                            img: "img/frame/frame1/lime/trapeza.png",
                            icon: "img/frame/frame1/lime/trapeza_icon.png"
                        }
                    ]
                }, {
                    name: "Teal Trim",
                    img: "img/frame/frame1/teal/frame.png",
                    color: "#2592a0",
                    swing: [{
                            name: "2 Seat Glider",
                            img: "img/frame/frame1/teal/seat_glider.png",
                            icon: "img/frame/frame1/teal/seat_glider_icon.png"
                        },
                        {
                            name: "Climbing ladder",
                            img: "img/frame/frame1/teal/ladder.png",
                            icon: "img/frame/frame1/teal/ladder_icon.png",
                            disabled: true
                        },
                        {
                            name: "Single Swing",
                            img: "img/frame/frame1/teal/single_s.png",
                            icon: "img/frame/frame1/teal/single_s_icon.png"
                        },
                        {
                            name: "Trapeze Swing",
                            img: "img/frame/frame1/teal/trapeza.png",
                            icon: "img/frame/frame1/teal/trapeza_icon.png"
                        }
                    ]

                }],

            } //end of first frame
            , {
                frame: "Double Frame",
                img: "img/frame/frame2/lime/frame.png",
                icon: "img/frame/frame2/lime/frame.png",
                trim: [{
                    name: "Lime Trim",
                    img: "img/frame/frame2/lime/frame.png",
                    color: "#d5ec5f",
                    swing: [{
                            name: "2 Seat Glider",
                            img: "img/frame/frame2/lime/swing1_0.png",
                            icon: "img/frame/frame2/lime/swing1_0_icon.png"
                        },
                        {
                            name: "Ball Buoy",
                            img: "img/frame/frame2/lime/swing1_1.png",
                            icon: "img/frame/frame2/lime/swing1_1_icon.png"
                        },
                        {
                            name: "Climbing Ladder",
                            img: "img/frame/frame2/lime/swing1_2.png",
                            icon: "img/frame/frame2/lime/swing1_2_icon.png"
                        },
                        {
                            name: "Nest Swing",
                            img: "img/frame/frame2/lime/swing1_3.png",
                            icon: "img/frame/frame2/lime/swing1_3_icon.png",
                            hidenext: true
                        },
                        {
                            name: "Single Swing",
                            img: "img/frame/frame2/lime/swing1_4.png",
                            icon: "img/frame/frame2/lime/swing1_4_icon.png"
                        }, {
                            name: "Trapeze Swing",
                            img: "img/frame/frame2/lime/swing1_5.png",
                            icon: "img/frame/frame2/lime/swing1_5_icon.png"
                        }
                    ],
                    swing2: [{
                            name: "2 Seat Glider",
                            img: "img/frame/frame2/lime/swing2_0.png",
                            icon: "img/frame/frame2/lime/swing1_0_icon.png"
                        }, {
                            name: "Ball Buoy",
                            img: "img/frame/frame2/lime/swing2_1.png",
                            icon: "img/frame/frame2/lime/swing1_1_icon.png"
                        }, {
                            name: "Climbing Ladder",
                            img: "img/frame/frame2/lime/swing2_2.png",
                            icon: "img/frame/frame2/lime/swing1_2_icon.png"

                        },
                        {
                            name: "Single Swing",
                            img: "img/frame/frame2/lime/swing2_3.png",
                            icon: "img/frame/frame2/lime/swing1_4_icon.png"
                        },
                        {
                            name: "Trapeze Swing",
                            img: "img/frame/frame2/lime/swing2_4.png",
                            icon: "img/frame/frame2/lime/swing1_5_icon.png"
                        }
                    ]
                }, {
                    name: "Teal Trim",
                    img: "img/frame/frame2/teal/frame.png",
                    icon: "img/frame/frame2/teal/frame_icon.png",
                    color: "#2592a0",
                    swing: [{
                            name: "2 Seat Glider",
                            img: "img/frame/frame2/teal/swing1_0.png",
                            icon: "img/frame/frame2/teal/swing1_0_icon.png"
                        },
                        {
                            name: "Ball Buoy",
                            img: "img/frame/frame2/teal/swing1_1.png",
                            icon: "img/frame/frame2/teal/swing1_1_icon.png"
                        },
                        {
                            name: "Climbing Ladder",
                            img: "img/frame/frame2/teal/swing1_2.png",
                            icon: "img/frame/frame2/teal/swing1_2_icon.png"
                        },
                        {
                            name: "Nest Swing",
                            img: "img/frame/frame2/teal/swing1_3.png",
                            icon: "img/frame/frame2/teal/swing1_3_icon.png",
                            hidenext: true
                        },
                        {
                            name: "Single Swing",
                            img: "img/frame/frame2/teal/swing1_4.png",
                            icon: "img/frame/frame2/teal/swing1_4_icon.png"
                        }, {
                            name: "Trapeze Swing",
                            img: "img/frame/frame2/teal/swing1_5.png",
                            icon: "img/frame/frame2/teal/swing1_5_icon.png"
                        }
                    ],
                    swing2: [{
                            name: "2 Seat Glider",
                            img: "img/frame/frame2/teal/swing2_0.png",
                            icon: "img/frame/frame2/teal/swing1_0_icon.png"
                        }, {
                            name: "Ball Buoy",
                            img: "img/frame/frame2/teal/swing2_1.png",
                            icon: "img/frame/frame2/teal/swing1_1_icon.png"
                        }, {
                            name: "Climbing Ladder",
                            img: "img/frame/frame2/teal/swing2_2.png",
                            icon: "img/frame/frame2/teal/swing1_2_icon.png"
                        },
                        {
                            name: "Single Swing",
                            img: "img/frame/frame2/teal/swing2_3.png",
                            icon: "img/frame/frame2/teal/swing1_4_icon.png"
                        },
                        {
                            name: "Trapeze Swing",
                            img: "img/frame/frame2/teal/swing2_4.png",
                            icon: "img/frame/frame2/teal/swing1_5_icon.png"
                        }
                    ]
                }],

            }
            //end of frame 2
            ,
            {
                frame: "Triple Frame",
                img: "img/frame/frame3/lime/frame.png",
                icon: "img/frame/frame3/lime/frame_icon.png",
                trim: [{
                    name: "Lime Trim",
                    img: "img/frame/frame3/lime/frame.png",
                    color: "#d5ec5f",
                    swing: [{
                            name: "2 Seat Glider",
                            img: "img/frame/frame3/lime/swing1_0.png",
                            icon: "img/frame/frame3/lime/swing1_0_icon.png",
                        },
                        {
                            name: "Ball Buoy",
                            img: "img/frame/frame3/lime/swing1_1.png",
                            icon: "img/frame/frame3/lime/swing1_1_icon.png",
                        },
                        {
                            name: "Climbing Ladder",
                            img: "img/frame/frame3/lime/swing1_2.png",
                            icon: "img/frame/frame3/lime/swing1_2_icon.png"
                        },
                        {
                            name: "Nest Swing",
                            img: "img/frame/frame3/lime/swing1_3.png",
                            icon: "img/frame/frame3/lime/swing1_3_icon.png",
                            hidenext: true
                        },
                        {
                            name: "Single Swing",
                            img: "img/frame/frame3/lime/swing1_4.png",
                            icon: "img/frame/frame3/lime/swing1_4_icon.png"
                        }, {
                            name: "Trapeze Swing",
                            img: "img/frame/frame3/lime/swing1_5.png",
                            icon: "img/frame/frame3/lime/swing1_5_icon.png"
                        }
                    ],
                    swing2: [{
                            name: "2 Seat Glider",
                            img: "img/frame/frame3/lime/swing2_0.png",
                            icon: "img/frame/frame3/lime/swing1_0_icon.png",
                        },
                        {
                            name: "Ball Buoy",
                            img: "img/frame/frame3/lime/swing2_1.png",
                            icon: "img/frame/frame3/lime/swing1_1_icon.png",
                        },
                        {
                            name: "Climbing Ladder",
                            img: "img/frame/frame3/lime/swing2_2.png",
                            icon: "img/frame/frame3/lime/swing1_2_icon.png"
                        },
                        {
                            name: "Nest Swing",
                            img: "img/frame/frame3/lime/swing2_3.png",
                            icon: "img/frame/frame3/lime/swing1_3_icon.png",
                            hidenext: true
                        },
                        {
                            name: "Single Swing",
                            img: "img/frame/frame3/lime/swing2_4.png",
                            icon: "img/frame/frame3/lime/swing1_4_icon.png"
                        },
                        {
                            name: "Trapeze Swing",
                            img: "img/frame/frame3/lime/swing2_5.png",
                            icon: "img/frame/frame3/lime/swing1_5_icon.png"
                        }
                    ],
                    swing3: [{
                            name: "2 Seat Glider",
                            img: "img/frame/frame3/lime/swing3_0.png",
                            icon: "img/frame/frame3/lime/swing1_0_icon.png",
                        }, {
                            name: "Ball Buoy",
                            img: "img/frame/frame3/lime/swing3_1.png",
                            icon: "img/frame/frame3/lime/swing1_1_icon.png",
                        }, {
                            name: "Climbing Ladder",
                            img: "img/frame/frame3/lime/swing3_2.png",
                            icon: "img/frame/frame3/lime/swing1_2_icon.png"
                        },
                        {
                            name: "Single Swing",
                            img: "img/frame/frame3/lime/swing3_3.png",
                            icon: "img/frame/frame3/lime/swing1_4_icon.png"
                        },
                        {
                            name: "Trapeze Swing",
                            img: "img/frame/frame3/lime/swing3_4.png",
                            icon: "img/frame/frame3/lime/swing1_5_icon.png"
                        }
                    ]

                }, {
                    name: "Teal Trim",
                    img: "img/frame/frame3/teal/frame.png",
                    icon: "img/frame/frame3/teal/frame_icon.png",
                    color: "#2592a0",
                    swing: [{
                            name: "2 Seat Glider",
                            img: "img/frame/frame3/teal/swing1_0.png",
                            icon: "img/frame/frame3/teal/swing1_0_icon.png"
                        },
                        {
                            name: "Ball Buoy",
                            img: "img/frame/frame3/teal/swing1_1.png",
                            icon: "img/frame/frame3/teal/swing1_1_icon.png"
                        },
                        {
                            name: "Climbing Ladder",
                            img: "img/frame/frame3/teal/swing1_2.png",
                            icon: "img/frame/frame3/teal/swing1_2_icon.png"
                        },
                        {
                            name: "Nest Swing",
                            img: "img/frame/frame3/teal/swing1_3.png",
                            icon: "img/frame/frame3/teal/swing1_3_icon.png",
                            hidenext: true
                        },
                        {
                            name: "Single Swing",
                            img: "img/frame/frame3/teal/swing1_4.png",
                            icon: "img/frame/frame3/teal/swing1_4_icon.png"
                        }, {
                            name: "Trapeze Swing",
                            img: "img/frame/frame3/teal/swing1_5.png",
                            icon: "img/frame/frame3/teal/swing1_5_icon.png"
                        }
                    ],
                    swing2: [{
                            name: "2 Seat Glider",
                            img: "img/frame/frame3/teal/swing2_0.png",
                            icon: "img/frame/frame3/teal/swing1_0_icon.png"
                        },
                        {
                            name: "Ball Buoy",
                            img: "img/frame/frame3/teal/swing2_1.png",
                            icon: "img/frame/frame3/teal/swing1_1_icon.png"
                        },
                        {
                            name: "Climbing Ladder",
                            img: "img/frame/frame3/teal/swing2_2.png",
                            icon: "img/frame/frame3/teal/swing1_2_icon.png"
                        },
                        {
                            name: "Nest Swing",
                            img: "img/frame/frame3/teal/swing2_3.png",
                            icon: "img/frame/frame3/teal/swing1_3_icon.png",
                            hidenext: true
                        },
                        {
                            name: "Single Swing",
                            img: "img/frame/frame3/teal/swing2_4.png",
                            icon: "img/frame/frame3/teal/swing1_4_icon.png"
                        },
                        {
                            name: "Trapeze Swing",
                            img: "img/frame/frame3/teal/swing2_5.png",
                            icon: "img/frame/frame3/teal/swing1_5_icon.png"
                        }
                    ],
                    swing3: [{
                            name: "2 Seat Glider",
                            img: "img/frame/frame3/teal/swing3_0.png",
                            icon: "img/frame/frame3/teal/swing1_0_icon.png"
                        }, {
                            name: "Ball Buoy",
                            img: "img/frame/frame3/teal/swing3_1.png",
                            icon: "img/frame/frame3/teal/swing1_1_icon.png"
                        }, {
                            name: "Climbing Ladder",
                            img: "img/frame/frame3/teal/swing3_2.png",
                            icon: "img/frame/frame3/teal/swing1_2_icon.png"
                        },
                        {
                            name: "Single Swing",
                            img: "img/frame/frame3/teal/swing3_3.png",
                            icon: "img/frame/frame3/teal/swing1_4_icon.png"
                        },
                        {
                            name: "Trapeze Swing",
                            img: "img/frame/frame3/teal/swing3_4.png",
                            icon: "img/frame/frame3/teal/swing1_5_icon.png"
                        }
                    ]


                }],

            }
            //end of frame 3
            ,
            {
                frame: "Double Frame With Slide Deck",
                img: "img/frame/frame4/lime/frame.png",
                icon: "img/frame/frame4/lime/frame_icon.png",
                trim: [{
                    name: "Lime Trim",
                    img: "img/frame/frame4/lime/frame.png",
                    icon: "img/frame/frame4/lime/frame_icon.png",
                    color: "#d5ec5f",
                    swing: [{
                            name: "2 Seat Glider",
                            img: "img/frame/frame4/lime/swing1_0.png",
                            icon: "img/frame/frame4/lime/swing1_0_icon.png"
                        },
                        {
                            name: "Ball Buoy",
                            img: "img/frame/frame4/lime/swing1_1.png",
                            icon: "img/frame/frame4/lime/swing1_1_icon.png"
                        },
                        {
                            name: "Climbing Ladder",
                            img: "img/frame/frame4/lime/swing1_2.png",
                            icon: "img/frame/frame4/lime/swing1_2_icon.png"
                        },
                        {
                            name: "Nest Swing",
                            img: "img/frame/frame4/lime/swing1_3.png",
                            icon: "img/frame/frame4/lime/swing1_3_icon.png",
                            hidenext: true
                        },
                        {
                            name: "Single Swing",
                            img: "img/frame/frame4/lime/swing1_4.png",
                            icon: "img/frame/frame4/lime/swing1_4_icon.png"
                        }, {
                            name: "Trapeze Swing",
                            img: "img/frame/frame4/lime/swing1_5.png",
                            icon: "img/frame/frame4/lime/swing1_5_icon.png"
                        }
                    ],
                    swing2: [{
                            name: "2 Seat Glider",
                            img: "img/frame/frame4/lime/swing2_0.png",
                            icon: "img/frame/frame4/lime/swing1_0_icon.png"
                        }, {
                            name: "Ball Buoy",
                            img: "img/frame/frame4/lime/swing2_1.png",
                            icon: "img/frame/frame4/lime/swing1_1_icon.png"
                        }, {
                            name: "Climbing Ladder",
                            img: "img/frame/frame4/lime/swing2_2.png",
                            icon: "img/frame/frame4/lime/swing1_2_icon.png"
                        },
                        {
                            name: "Single Swing",
                            img: "img/frame/frame4/lime/swing2_3.png",
                            icon: "img/frame/frame4/lime/swing1_4_icon.png"
                        },
                        {
                            name: "Trapeze Swing",
                            img: "img/frame/frame4/lime/swing2_4.png",
                            icon: "img/frame/frame4/lime/swing1_5_icon.png"
                        }
                    ]
                }, {
                    name: "Teal Trim",
                    img: "img/frame/frame4/teal/frame.png",
                    icon: "img/frame/frame4/teal/frame_icon.png",
                    color: "#2592a0",
                    swing: [{
                            name: "2 Seat Glider",
                            img: "img/frame/frame4/teal/swing1_0.png",
                            icon: "img/frame/frame4/teal/swing1_0_icon.png"
                        },
                        {
                            name: "Ball Buoy",
                            img: "img/frame/frame4/teal/swing1_1.png",
                            icon: "img/frame/frame4/teal/swing1_1_icon.png"
                        },
                        {
                            name: "Climbing Ladder",
                            img: "img/frame/frame4/teal/swing1_2.png",
                            icon: "img/frame/frame4/teal/swing1_2_icon.png"
                        },
                        {
                            name: "Nest Swing",
                            img: "img/frame/frame4/teal/swing1_3.png",
                            icon: "img/frame/frame4/teal/swing1_3_icon.png",
                            hidenext: true
                        },
                        {
                            name: "Single Swing",
                            img: "img/frame/frame4/teal/swing1_4.png",
                            icon: "img/frame/frame4/teal/swing1_4_icon.png"
                        }, {
                            name: "Trapeze Swing",
                            img: "img/frame/frame4/teal/swing1_5.png",
                            icon: "img/frame/frame4/teal/swing1_5_icon.png"
                        }
                    ],
                    swing2: [{
                            name: "2 Seat Glider",
                            img: "img/frame/frame4/teal/swing2_0.png",
                            icon: "img/frame/frame4/teal/swing1_0_icon.png"
                        }, {
                            name: "Ball Buoy",
                            img: "img/frame/frame4/teal/swing2_1.png",
                            icon: "img/frame/frame4/teal/swing1_1_icon.png"
                        }, {
                            name: "Climbing Ladder",
                            img: "img/frame/frame4/teal/swing2_2.png",
                            icon: "img/frame/frame4/teal/swing1_2_icon.png"
                        },
                        {
                            name: "Single Swing",
                            img: "img/frame/frame4/teal/swing2_3.png",
                            icon: "img/frame/frame4/teal/swing1_4_icon.png"
                        },
                        {
                            name: "Trapeze Swing",
                            img: "img/frame/frame4/teal/swing2_4.png",
                            icon: "img/frame/frame4/teal/swing1_5_icon.png"
                        }
                    ]
                }],
                slide: [{
                    name: "Lime Slide",
                    img: "img/frame/frame4/f4_slide1.png",
                    color: "#739b50",
                }, {
                    name: "Turquoise Slide",
                    img: "img/frame/frame4/f4_slide2.png",
                    color: "#91cedd"

                }],
            }
        ]
        //json for all selected value
        $scope.selectedValue = {
            s_frame: $scope.custom_swingList[0],
            s_background: "img/frame/background.jpg",
            s_trim: null,
            s_swing: null,
            s_swing2: null,
            s_swing3: null

        };
        $scope.empty_SelectedValue = function () {
            $scope.selectedValue.s_trim = null;
            $scope.selectedValue.s_swing = null;
            $scope.selectedValue.s_swing2 = null;
            $scope.selectedValue.s_swing3 = null;
            $scope.selectedValue.s_slide = null;
        }
        $scope.empty_Selectedtrim = function () {
            $scope.selectedValue.s_swing = null;
            $scope.selectedValue.s_swing2 = null;
            $scope.selectedValue.s_swing3 = null;
            $scope.selectedValue.s_slide = null;
        }
        // $(".layer3").preventDefault();
        //background icon 
        $scope.background = [{
            url: "img/frame/background.jpg",
            select: false
        }, {
            url: "img/frame/background1.jpg",
            select: false
        }];
        $scope.changeselect = function (index) {
            console.log("inside background image index", index);
            $scope.select_b.length = 0
            $scope.select_b[index] = true;
        }
        $scope.layermove = function (event) {
            if ($scope.mousedown) {
                // console.log(event);
                $(".inside_canvas").css("top", event.clientY - 200);
                $(".inside_canvas").css("left", event.clientX - 250);

            }
        }
        $scope.mousedownfun = function (event) {
            $scope.mousedown = true;
            console.log("inside mouse down", $scope.mousedown)
            console.log("offset", event.clientY, event.clientX);
        }
        $scope.mouseupfun = function () {
            $scope.mousedown = false;
            console.log("inside mouse up", $scope.mousedown)
        }
        $scope.mouseleavefun = function () {
            $scope.mousedown = false;
            console.log("inside mouse leave", $scope.mousedown)
        }


    })

    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/form.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
        // $scope.data = {
        //     name: "Chintan",
        //     "age": 20,
        //     "email": "chinyan@wohlig.com",
        //     "query": "query"
        // };
        $scope.submitForm = function (data) {
            console.log("This is it");
            return new Promise(function (callback) {
                $timeout(function () {
                    callback();
                }, 5000);
            });
        };
    })
    .controller('GridCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/grid.html");
        TemplateService.title = "Grid"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })

    // Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });