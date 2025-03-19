import{_ as c,r as i,o as t,c as e,a as n,b as s,w as a,d as o,e as r}from"./app-Ec_z8kpw.js";const d={},T=n("h2",{id:"二叉堆",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二叉堆"},[n("span",null,"二叉堆")])],-1),u=n("p",null,"二叉堆是一个完全二叉树。通常情况下使用数组进行实现。二叉堆有以下性质：",-1),Q={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.09ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.929ex",height:"1.597ex",role:"img",focusable:"false",viewBox:"0 -666 2178.6 706","aria-hidden":"true"},m=n("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[n("g",{"data-mml-node":"math"},[n("g",{"data-mml-node":"mi"},[n("path",{"data-c":"1D456",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"mo",transform:"translate(622.8,0)"},[n("path",{"data-c":"3E",d:"M84 520Q84 528 88 533T96 539L99 540Q106 540 253 471T544 334L687 265Q694 260 694 250T687 235Q685 233 395 96L107 -40H101Q83 -38 83 -20Q83 -19 83 -17Q82 -10 98 -1Q117 9 248 71Q326 108 378 132L626 250L378 368Q90 504 86 509Q84 513 84 520Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"mn",transform:"translate(1678.6,0)"},[n("path",{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",style:{"stroke-width":"3"}})])])],-1),k=[m],h=n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("mi",null,"i"),n("mo",null,">"),n("mn",null,"1")],-1),w={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.043ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 1345 1000","aria-hidden":"true"},x=n("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[n("g",{"data-mml-node":"math"},[n("g",{"data-mml-node":"mi"},[n("path",{"data-c":"1D456",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD",transform:"translate(345,0)"},[n("g",{"data-mml-node":"mo"},[n("path",{"data-c":"2F",d:"M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z",style:{"stroke-width":"3"}})])]),n("g",{"data-mml-node":"mn",transform:"translate(845,0)"},[n("path",{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",style:{"stroke-width":"3"}})])])],-1),v=[x],b=n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("mi",null,"i"),n("mrow",{"data-mjx-texclass":"ORD"},[n("mo",null,"/")]),n("mn",null,"2")],-1),g={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.09ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.286ex",height:"1.597ex",role:"img",focusable:"false",viewBox:"0 -666 2778.6 706","aria-hidden":"true"},f=n("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[n("g",{"data-mml-node":"math"},[n("g",{"data-mml-node":"mn"},[n("path",{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"mi",transform:"translate(500,0)"},[n("path",{"data-c":"1D456",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"mo",transform:"translate(1122.8,0)"},[n("path",{"data-c":"3E",d:"M84 520Q84 528 88 533T96 539L99 540Q106 540 253 471T544 334L687 265Q694 260 694 250T687 235Q685 233 395 96L107 -40H101Q83 -38 83 -20Q83 -19 83 -17Q82 -10 98 -1Q117 9 248 71Q326 108 378 132L626 250L378 368Q90 504 86 509Q84 513 84 520Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"mi",transform:"translate(2178.6,0)"},[n("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),_=[f],y=n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("mn",null,"2"),n("mi",null,"i"),n("mo",null,">"),n("mi",null,"n")],-1),M={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"0.781ex",height:"1.52ex",role:"img",focusable:"false",viewBox:"0 -661 345 672","aria-hidden":"true"},H=n("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[n("g",{"data-mml-node":"math"},[n("g",{"data-mml-node":"mi"},[n("path",{"data-c":"1D456",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),V=[H],L=n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("mi",null,"i")],-1),Z={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.912ex",height:"1.532ex",role:"img",focusable:"false",viewBox:"0 -666 845 677","aria-hidden":"true"},j=n("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[n("g",{"data-mml-node":"math"},[n("g",{"data-mml-node":"mn"},[n("path",{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"mi",transform:"translate(500,0)"},[n("path",{"data-c":"1D456",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),C=[j],D=n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("mn",null,"2"),n("mi",null,"i")],-1),z={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.809ex",height:"1.692ex",role:"img",focusable:"false",viewBox:"0 -666 2567.4 748","aria-hidden":"true"},B=n("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[n("g",{"data-mml-node":"math"},[n("g",{"data-mml-node":"mn"},[n("path",{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"mi",transform:"translate(500,0)"},[n("path",{"data-c":"1D456",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"mo",transform:"translate(1067.2,0)"},[n("path",{"data-c":"2B",d:"M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"mn",transform:"translate(2067.4,0)"},[n("path",{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",style:{"stroke-width":"3"}})])])],-1),I=[B],S=n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("mn",null,"2"),n("mi",null,"i"),n("mo",null,"+"),n("mn",null,"1")],-1),G={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.682ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3837.6 1000","aria-hidden":"true"},J=n("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[n("g",{"data-mml-node":"math"},[n("g",{"data-mml-node":"mi"},[n("path",{"data-c":"1D442",d:"M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"mo",transform:"translate(763,0)"},[n("path",{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"mi",transform:"translate(1152,0)"},[n("path",{"data-c":"1D459",d:"M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"mi",transform:"translate(1450,0)"},[n("path",{"data-c":"1D45C",d:"M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"msub",transform:"translate(1935,0)"},[n("g",{"data-mml-node":"mi"},[n("path",{"data-c":"1D454",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z",style:{"stroke-width":"3"}})]),n("g",{"data-mml-node":"mn",transform:"translate(510,-150) scale(0.707)"},[n("path",{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",style:{"stroke-width":"3"}})])]),n("g",{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD",transform:"translate(2848.6,0)"},[n("g",{"data-mml-node":"mi"},[n("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])]),n("g",{"data-mml-node":"mo",transform:"translate(3448.6,0)"},[n("path",{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",style:{"stroke-width":"3"}})])])],-1),O=[J],R=n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"l"),n("mi",null,"o"),n("msub",null,[n("mi",null,"g"),n("mn",null,"2")]),n("mrow",{"data-mjx-texclass":"ORD"},[n("mi",null,"n")]),n("mo",{stretchy:"false"},")")],-1),E=r(`<h3 id="上浮pop" tabindex="-1"><a class="header-anchor" href="#上浮pop"><span>上浮pop</span></a></h3><p>上浮操作是将新插入的元素调整到合适位置的操作。上浮过程需要与其父节点的key做比较，在最小堆情况，如果新节点的值小于其父节点，那么就要进行节点交换，维护堆的性质。</p><h3 id="下沉push" tabindex="-1"><a class="header-anchor" href="#下沉push"><span>下沉push</span></a></h3><p>队顶元素出堆后会使用堆的最后一个元素作为替代，此时的堆不满足堆的性质，因此要使用下沉操作恢复堆的性质。以最小堆为背景，将最后一个元素放置在堆顶，此时需要将该元素和子节点两个元素的key做比较，始终选择子节点中最小的元素替换当前元素，当前元素下沉。直到当前节点都小于子节点或者没有子节点时停止</p><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Heap</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> element<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> cap <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Heap</span><span class="token punctuation">(</span><span class="token keyword">int</span> cap<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cap <span class="token operator">=</span> cap<span class="token punctuation">;</span>
        element <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">[</span>cap<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> el<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>size <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;</span> cap<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;Heap full&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//可以动态扩容2倍</span>
        element<span class="token punctuation">[</span><span class="token operator">++</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> el<span class="token punctuation">;</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> size<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&gt;</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> element<span class="token punctuation">[</span>i<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>element<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">swap</span><span class="token punctuation">(</span>i<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            i<span class="token operator">/=</span><span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> idx1<span class="token punctuation">,</span><span class="token keyword">int</span> idx2<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Integer</span> t <span class="token operator">=</span> element<span class="token punctuation">[</span>idx1<span class="token punctuation">]</span><span class="token punctuation">;</span>
        element<span class="token punctuation">[</span>idx1<span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">[</span>idx2<span class="token punctuation">]</span><span class="token punctuation">;</span>
        element<span class="token punctuation">[</span>idx2<span class="token punctuation">]</span> <span class="token operator">=</span> t<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Integer</span> el <span class="token operator">=</span> element<span class="token punctuation">[</span>size <span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> size<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>i<span class="token operator">&lt;=</span>size<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> son <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>i<span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>son <span class="token operator">&lt;</span> size <span class="token operator">&amp;&amp;</span> element<span class="token punctuation">[</span>son<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">&lt;</span>element<span class="token punctuation">[</span>son<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                son<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>element<span class="token punctuation">[</span>son<span class="token punctuation">]</span><span class="token operator">&lt;</span>element<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">swap</span><span class="token punctuation">(</span>son<span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                i <span class="token operator">=</span> son<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> el<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function N(q,A){const l=i("mjx-assistive-mml"),p=i("mjx-container");return t(),e("div",null,[T,u,n("ol",null,[n("li",null,[s(p,{class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},{default:a(()=>[(t(),e("svg",Q,k)),s(l,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:a(()=>[h]),_:1})]),_:1}),o("的节点，其父节点时"),s(p,{class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},{default:a(()=>[(t(),e("svg",w,v)),s(l,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:a(()=>[b]),_:1})]),_:1}),o("。")]),n("li",null,[o("如果"),s(p,{class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},{default:a(()=>[(t(),e("svg",g,_)),s(l,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:a(()=>[y]),_:1})]),_:1}),o("，则该节点没有子节点。")]),n("li",null,[o("如果节点"),s(p,{class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},{default:a(()=>[(t(),e("svg",M,V)),s(l,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:a(()=>[L]),_:1})]),_:1}),o("有子节点，他的左右子节点的编号分别是"),s(p,{class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},{default:a(()=>[(t(),e("svg",Z,C)),s(l,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:a(()=>[D]),_:1})]),_:1}),o("和"),s(p,{class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},{default:a(()=>[(t(),e("svg",z,I)),s(l,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:a(()=>[S]),_:1})]),_:1})])]),n("p",null,[o("二叉堆有两个基本操作：进堆和出堆。其计算复杂度未"),s(p,{class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},{default:a(()=>[(t(),e("svg",G,O)),s(l,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:a(()=>[R]),_:1})]),_:1})]),E])}const F=c(d,[["render",N],["__file","heap.html.vue"]]);export{F as default};
