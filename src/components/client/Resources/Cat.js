"use client";

export default function Cat({color}) {
    return <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="64pt" height="64pt" viewBox="0 0 1280 1280"
                preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0,1280) scale(0.1,-0.1)"
           fill={color} stroke="none">
            <path d="M4575 12769 c-87 -46 -147 -100 -180 -160 -67 -124 -18 -253 134
-351 l46 -30 -70 6 c-200 17 -695 28 -1008 22 -498 -9 -673 -21 -1437 -105
l-265 -29 -70 67 c-135 129 -263 222 -435 316 -176 96 -437 225 -454 225 -32
0 -76 -30 -82 -56 -4 -14 -4 -47 -1 -72 3 -26 15 -117 26 -202 36 -274 52
-460 58 -675 8 -285 -4 -355 -158 -895 -39 -135 -73 -275 -76 -311 l-6 -65
-263 -12 c-144 -7 -274 -16 -289 -22 -51 -19 -57 -95 -9 -127 24 -15 47 -16
296 -5 148 7 274 10 279 6 5 -3 9 -17 9 -32 1 -15 14 -76 30 -137 15 -60 27
-112 25 -114 -2 -2 -122 -28 -267 -57 -144 -30 -273 -61 -285 -69 -30 -20 -40
-62 -22 -94 28 -49 48 -49 321 8 139 28 267 54 284 57 30 6 33 4 77 -78 25
-45 59 -103 76 -128 l30 -44 -57 -22 c-31 -12 -194 -74 -362 -138 -167 -64
-312 -124 -322 -133 -25 -22 -24 -85 1 -107 39 -35 19 -41 726 229 l110 43 90
-89 c147 -144 271 -232 454 -324 257 -129 464 -184 911 -240 213 -27 387 -58
401 -72 10 -11 -22 -212 -66 -417 -104 -484 -299 -1028 -605 -1691 -125 -270
-413 -872 -570 -1190 -71 -143 -150 -312 -176 -375 -216 -527 -332 -1102 -350
-1730 -6 -206 16 -922 36 -1170 37 -448 119 -755 288 -1082 4 -9 -29 -6 -278
29 -239 33 -470 37 -578 9 -190 -48 -299 -187 -309 -396 -8 -155 32 -280 128
-403 125 -159 247 -192 544 -147 72 11 154 20 184 20 29 0 286 -25 570 -55
284 -30 595 -61 691 -70 270 -24 486 -44 585 -54 337 -36 883 -38 1340 -6 562
38 1066 85 1440 134 410 54 595 58 745 16 114 -31 253 -14 380 47 77 37 204
159 237 228 28 57 53 153 53 200 -1 118 -72 281 -164 376 -138 139 -309 169
-627 109 -85 -16 -389 -48 -396 -42 -2 3 5 20 16 38 54 92 191 453 191 503 0
9 22 27 49 40 181 92 385 332 572 673 141 256 219 462 298 783 121 498 167
895 158 1360 -6 299 -21 452 -62 654 -55 272 -97 376 -244 601 -177 271 -196
334 -196 660 0 167 4 227 19 295 44 201 122 357 336 672 85 125 186 276 225
335 76 118 205 292 394 533 360 459 485 704 553 1090 29 166 31 536 4 735 -66
486 -192 878 -390 1218 -82 141 -125 201 -247 347 -238 285 -593 579 -932 771
-78 44 -79 44 -73 79 3 19 8 67 12 105 6 66 5 72 -19 98 -40 42 -75 36 -194
-34 l-102 -61 -93 30 c-172 56 -352 92 -663 131 -280 36 -345 41 -636 47
l-284 6 -60 -33z m930 -610 c88 -11 162 -23 164 -25 3 -3 -4 -13 -15 -24 -19
-20 -21 -20 -249 15 -127 19 -241 35 -255 36 l-25 1 25 8 c46 15 194 10 355
-11z m1195 -483 c204 -154 372 -315 519 -500 266 -336 445 -887 458 -1418 8
-277 -19 -439 -106 -635 -76 -173 -161 -299 -437 -646 -102 -128 -219 -281
-261 -342 -181 -265 -449 -675 -509 -781 -177 -307 -254 -635 -241 -1014 6
-151 32 -354 58 -455 26 -98 145 -327 259 -495 73 -109 98 -169 133 -330 46
-209 52 -283 52 -655 -1 -307 -3 -371 -23 -520 -61 -454 -168 -878 -280 -1110
l-49 -100 -6 225 c-4 124 -12 378 -17 565 -12 408 -26 533 -84 770 -140 567
-312 994 -859 2126 -380 787 -545 1183 -681 1636 -25 81 -54 175 -65 207 -30
85 -49 189 -66 365 -8 85 -15 160 -15 167 0 28 131 53 442 84 111 11 248 28
303 36 445 69 826 250 1088 516 l87 89 333 -127 c406 -155 411 -156 442 -142
34 15 51 60 35 97 -14 35 -10 33 -395 179 -159 61 -298 114 -307 117 -16 7
-16 11 8 49 14 22 46 83 70 134 39 82 47 92 67 87 102 -24 507 -105 526 -105
36 0 71 37 71 75 0 60 -21 68 -305 126 -143 29 -261 53 -262 54 -2 1 8 55 22
121 14 65 25 132 25 148 l0 29 103 -6 c56 -4 183 -9 282 -13 176 -6 180 -6
203 16 31 30 27 86 -8 111 -21 16 -63 20 -295 31 l-270 13 -6 75 c-4 41 -30
176 -59 300 -105 457 -130 614 -130 816 0 94 3 124 13 124 7 0 69 -42 137 -94z"/>
        </g>
    </svg>
}
