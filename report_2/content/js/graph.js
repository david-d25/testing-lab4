/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 310.0, "minX": 0.0, "maxY": 491.0, "series": [{"data": [[0.0, 310.0], [0.1, 310.0], [0.2, 310.0], [0.3, 310.0], [0.4, 310.0], [0.5, 313.0], [0.6, 313.0], [0.7, 313.0], [0.8, 313.0], [0.9, 318.0], [1.0, 318.0], [1.1, 318.0], [1.2, 318.0], [1.3, 318.0], [1.4, 319.0], [1.5, 319.0], [1.6, 319.0], [1.7, 319.0], [1.8, 319.0], [1.9, 319.0], [2.0, 319.0], [2.1, 319.0], [2.2, 319.0], [2.3, 319.0], [2.4, 319.0], [2.5, 319.0], [2.6, 319.0], [2.7, 321.0], [2.8, 321.0], [2.9, 321.0], [3.0, 321.0], [3.1, 324.0], [3.2, 324.0], [3.3, 324.0], [3.4, 324.0], [3.5, 324.0], [3.6, 324.0], [3.7, 324.0], [3.8, 324.0], [3.9, 324.0], [4.0, 325.0], [4.1, 325.0], [4.2, 325.0], [4.3, 325.0], [4.4, 326.0], [4.5, 326.0], [4.6, 326.0], [4.7, 326.0], [4.8, 326.0], [4.9, 327.0], [5.0, 327.0], [5.1, 327.0], [5.2, 327.0], [5.3, 327.0], [5.4, 327.0], [5.5, 327.0], [5.6, 327.0], [5.7, 327.0], [5.8, 327.0], [5.9, 327.0], [6.0, 327.0], [6.1, 327.0], [6.2, 327.0], [6.3, 327.0], [6.4, 327.0], [6.5, 327.0], [6.6, 328.0], [6.7, 328.0], [6.8, 328.0], [6.9, 328.0], [7.0, 328.0], [7.1, 328.0], [7.2, 328.0], [7.3, 328.0], [7.4, 328.0], [7.5, 329.0], [7.6, 329.0], [7.7, 329.0], [7.8, 329.0], [7.9, 330.0], [8.0, 330.0], [8.1, 330.0], [8.2, 330.0], [8.3, 330.0], [8.4, 330.0], [8.5, 330.0], [8.6, 330.0], [8.7, 330.0], [8.8, 330.0], [8.9, 330.0], [9.0, 330.0], [9.1, 330.0], [9.2, 331.0], [9.3, 331.0], [9.4, 331.0], [9.5, 331.0], [9.6, 331.0], [9.7, 332.0], [9.8, 332.0], [9.9, 332.0], [10.0, 332.0], [10.1, 332.0], [10.2, 332.0], [10.3, 332.0], [10.4, 332.0], [10.5, 333.0], [10.6, 333.0], [10.7, 333.0], [10.8, 333.0], [10.9, 333.0], [11.0, 336.0], [11.1, 336.0], [11.2, 336.0], [11.3, 336.0], [11.4, 337.0], [11.5, 337.0], [11.6, 337.0], [11.7, 337.0], [11.8, 338.0], [11.9, 338.0], [12.0, 338.0], [12.1, 338.0], [12.2, 338.0], [12.3, 338.0], [12.4, 338.0], [12.5, 338.0], [12.6, 338.0], [12.7, 339.0], [12.8, 339.0], [12.9, 339.0], [13.0, 339.0], [13.1, 339.0], [13.2, 340.0], [13.3, 340.0], [13.4, 340.0], [13.5, 340.0], [13.6, 340.0], [13.7, 340.0], [13.8, 340.0], [13.9, 340.0], [14.0, 341.0], [14.1, 341.0], [14.2, 341.0], [14.3, 341.0], [14.4, 341.0], [14.5, 341.0], [14.6, 341.0], [14.7, 341.0], [14.8, 341.0], [14.9, 343.0], [15.0, 343.0], [15.1, 343.0], [15.2, 343.0], [15.3, 344.0], [15.4, 344.0], [15.5, 344.0], [15.6, 344.0], [15.7, 344.0], [15.8, 345.0], [15.9, 345.0], [16.0, 345.0], [16.1, 345.0], [16.2, 348.0], [16.3, 348.0], [16.4, 348.0], [16.5, 348.0], [16.6, 348.0], [16.7, 348.0], [16.8, 348.0], [16.9, 348.0], [17.0, 348.0], [17.1, 348.0], [17.2, 348.0], [17.3, 348.0], [17.4, 348.0], [17.5, 349.0], [17.6, 349.0], [17.7, 349.0], [17.8, 349.0], [17.9, 349.0], [18.0, 349.0], [18.1, 349.0], [18.2, 349.0], [18.3, 349.0], [18.4, 354.0], [18.5, 354.0], [18.6, 354.0], [18.7, 354.0], [18.8, 356.0], [18.9, 356.0], [19.0, 356.0], [19.1, 356.0], [19.2, 356.0], [19.3, 358.0], [19.4, 358.0], [19.5, 358.0], [19.6, 358.0], [19.7, 359.0], [19.8, 359.0], [19.9, 359.0], [20.0, 359.0], [20.1, 362.0], [20.2, 362.0], [20.3, 362.0], [20.4, 362.0], [20.5, 362.0], [20.6, 362.0], [20.7, 362.0], [20.8, 362.0], [20.9, 362.0], [21.0, 362.0], [21.1, 362.0], [21.2, 362.0], [21.3, 362.0], [21.4, 362.0], [21.5, 362.0], [21.6, 362.0], [21.7, 362.0], [21.8, 362.0], [21.9, 362.0], [22.0, 362.0], [22.1, 362.0], [22.2, 362.0], [22.3, 362.0], [22.4, 362.0], [22.5, 362.0], [22.6, 362.0], [22.7, 362.0], [22.8, 362.0], [22.9, 362.0], [23.0, 362.0], [23.1, 362.0], [23.2, 363.0], [23.3, 363.0], [23.4, 363.0], [23.5, 363.0], [23.6, 363.0], [23.7, 363.0], [23.8, 363.0], [23.9, 363.0], [24.0, 363.0], [24.1, 363.0], [24.2, 363.0], [24.3, 363.0], [24.4, 363.0], [24.5, 363.0], [24.6, 363.0], [24.7, 363.0], [24.8, 363.0], [24.9, 364.0], [25.0, 364.0], [25.1, 364.0], [25.2, 364.0], [25.3, 364.0], [25.4, 365.0], [25.5, 365.0], [25.6, 365.0], [25.7, 365.0], [25.8, 366.0], [25.9, 366.0], [26.0, 366.0], [26.1, 366.0], [26.2, 366.0], [26.3, 366.0], [26.4, 366.0], [26.5, 366.0], [26.6, 366.0], [26.7, 367.0], [26.8, 367.0], [26.9, 367.0], [27.0, 367.0], [27.1, 367.0], [27.2, 367.0], [27.3, 367.0], [27.4, 367.0], [27.5, 367.0], [27.6, 367.0], [27.7, 367.0], [27.8, 367.0], [27.9, 367.0], [28.0, 368.0], [28.1, 368.0], [28.2, 368.0], [28.3, 368.0], [28.4, 369.0], [28.5, 369.0], [28.6, 369.0], [28.7, 369.0], [28.8, 369.0], [28.9, 369.0], [29.0, 369.0], [29.1, 369.0], [29.2, 369.0], [29.3, 369.0], [29.4, 369.0], [29.5, 369.0], [29.6, 369.0], [29.7, 369.0], [29.8, 369.0], [29.9, 369.0], [30.0, 369.0], [30.1, 369.0], [30.2, 369.0], [30.3, 369.0], [30.4, 369.0], [30.5, 369.0], [30.6, 371.0], [30.7, 371.0], [30.8, 371.0], [30.9, 371.0], [31.0, 371.0], [31.1, 372.0], [31.2, 372.0], [31.3, 372.0], [31.4, 372.0], [31.5, 373.0], [31.6, 373.0], [31.7, 373.0], [31.8, 373.0], [31.9, 373.0], [32.0, 373.0], [32.1, 373.0], [32.2, 373.0], [32.3, 373.0], [32.4, 374.0], [32.5, 374.0], [32.6, 374.0], [32.7, 374.0], [32.8, 374.0], [32.9, 374.0], [33.0, 374.0], [33.1, 374.0], [33.2, 374.0], [33.3, 374.0], [33.4, 374.0], [33.5, 374.0], [33.6, 374.0], [33.7, 375.0], [33.8, 375.0], [33.9, 375.0], [34.0, 375.0], [34.1, 376.0], [34.2, 376.0], [34.3, 376.0], [34.4, 376.0], [34.5, 376.0], [34.6, 376.0], [34.7, 376.0], [34.8, 376.0], [34.9, 376.0], [35.0, 377.0], [35.1, 377.0], [35.2, 377.0], [35.3, 377.0], [35.4, 377.0], [35.5, 377.0], [35.6, 377.0], [35.7, 377.0], [35.8, 377.0], [35.9, 377.0], [36.0, 377.0], [36.1, 377.0], [36.2, 377.0], [36.3, 377.0], [36.4, 377.0], [36.5, 377.0], [36.6, 377.0], [36.7, 378.0], [36.8, 378.0], [36.9, 378.0], [37.0, 378.0], [37.1, 378.0], [37.2, 378.0], [37.3, 378.0], [37.4, 378.0], [37.5, 378.0], [37.6, 378.0], [37.7, 378.0], [37.8, 378.0], [37.9, 378.0], [38.0, 378.0], [38.1, 378.0], [38.2, 378.0], [38.3, 378.0], [38.4, 378.0], [38.5, 379.0], [38.6, 379.0], [38.7, 379.0], [38.8, 379.0], [38.9, 379.0], [39.0, 379.0], [39.1, 379.0], [39.2, 379.0], [39.3, 379.0], [39.4, 380.0], [39.5, 380.0], [39.6, 380.0], [39.7, 380.0], [39.8, 380.0], [39.9, 380.0], [40.0, 380.0], [40.1, 380.0], [40.2, 380.0], [40.3, 380.0], [40.4, 380.0], [40.5, 380.0], [40.6, 380.0], [40.7, 381.0], [40.8, 381.0], [40.9, 381.0], [41.0, 381.0], [41.1, 385.0], [41.2, 385.0], [41.3, 385.0], [41.4, 385.0], [41.5, 385.0], [41.6, 385.0], [41.7, 385.0], [41.8, 385.0], [41.9, 385.0], [42.0, 385.0], [42.1, 385.0], [42.2, 385.0], [42.3, 385.0], [42.4, 388.0], [42.5, 388.0], [42.6, 388.0], [42.7, 388.0], [42.8, 388.0], [42.9, 388.0], [43.0, 388.0], [43.1, 388.0], [43.2, 388.0], [43.3, 388.0], [43.4, 388.0], [43.5, 388.0], [43.6, 388.0], [43.7, 390.0], [43.8, 390.0], [43.9, 390.0], [44.0, 390.0], [44.1, 390.0], [44.2, 391.0], [44.3, 391.0], [44.4, 391.0], [44.5, 391.0], [44.6, 393.0], [44.7, 393.0], [44.8, 393.0], [44.9, 393.0], [45.0, 393.0], [45.1, 393.0], [45.2, 393.0], [45.3, 393.0], [45.4, 393.0], [45.5, 394.0], [45.6, 394.0], [45.7, 394.0], [45.8, 394.0], [45.9, 394.0], [46.0, 394.0], [46.1, 394.0], [46.2, 394.0], [46.3, 394.0], [46.4, 394.0], [46.5, 394.0], [46.6, 394.0], [46.7, 394.0], [46.8, 394.0], [46.9, 394.0], [47.0, 394.0], [47.1, 394.0], [47.2, 395.0], [47.3, 395.0], [47.4, 395.0], [47.5, 395.0], [47.6, 395.0], [47.7, 395.0], [47.8, 395.0], [47.9, 395.0], [48.0, 395.0], [48.1, 396.0], [48.2, 396.0], [48.3, 396.0], [48.4, 396.0], [48.5, 396.0], [48.6, 396.0], [48.7, 396.0], [48.8, 396.0], [48.9, 396.0], [49.0, 396.0], [49.1, 396.0], [49.2, 396.0], [49.3, 396.0], [49.4, 396.0], [49.5, 396.0], [49.6, 396.0], [49.7, 396.0], [49.8, 396.0], [49.9, 396.0], [50.0, 396.0], [50.1, 396.0], [50.2, 396.0], [50.3, 396.0], [50.4, 396.0], [50.5, 396.0], [50.6, 396.0], [50.7, 396.0], [50.8, 396.0], [50.9, 396.0], [51.0, 396.0], [51.1, 397.0], [51.2, 397.0], [51.3, 397.0], [51.4, 397.0], [51.5, 397.0], [51.6, 397.0], [51.7, 397.0], [51.8, 397.0], [51.9, 397.0], [52.0, 397.0], [52.1, 397.0], [52.2, 397.0], [52.3, 397.0], [52.4, 397.0], [52.5, 397.0], [52.6, 397.0], [52.7, 397.0], [52.8, 397.0], [52.9, 397.0], [53.0, 397.0], [53.1, 397.0], [53.2, 397.0], [53.3, 397.0], [53.4, 397.0], [53.5, 397.0], [53.6, 397.0], [53.7, 397.0], [53.8, 397.0], [53.9, 397.0], [54.0, 397.0], [54.1, 397.0], [54.2, 397.0], [54.3, 397.0], [54.4, 397.0], [54.5, 397.0], [54.6, 397.0], [54.7, 397.0], [54.8, 397.0], [54.9, 397.0], [55.0, 397.0], [55.1, 397.0], [55.2, 397.0], [55.3, 397.0], [55.4, 397.0], [55.5, 397.0], [55.6, 397.0], [55.7, 397.0], [55.8, 397.0], [55.9, 398.0], [56.0, 398.0], [56.1, 398.0], [56.2, 398.0], [56.3, 398.0], [56.4, 398.0], [56.5, 398.0], [56.6, 398.0], [56.7, 398.0], [56.8, 398.0], [56.9, 398.0], [57.0, 398.0], [57.1, 398.0], [57.2, 398.0], [57.3, 398.0], [57.4, 398.0], [57.5, 398.0], [57.6, 398.0], [57.7, 398.0], [57.8, 398.0], [57.9, 398.0], [58.0, 398.0], [58.1, 398.0], [58.2, 398.0], [58.3, 398.0], [58.4, 398.0], [58.5, 398.0], [58.6, 398.0], [58.7, 398.0], [58.8, 398.0], [58.9, 398.0], [59.0, 398.0], [59.1, 398.0], [59.2, 398.0], [59.3, 398.0], [59.4, 398.0], [59.5, 398.0], [59.6, 398.0], [59.7, 398.0], [59.8, 398.0], [59.9, 399.0], [60.0, 399.0], [60.1, 399.0], [60.2, 399.0], [60.3, 399.0], [60.4, 399.0], [60.5, 399.0], [60.6, 399.0], [60.7, 399.0], [60.8, 399.0], [60.9, 399.0], [61.0, 399.0], [61.1, 399.0], [61.2, 399.0], [61.3, 399.0], [61.4, 399.0], [61.5, 399.0], [61.6, 399.0], [61.7, 399.0], [61.8, 399.0], [61.9, 399.0], [62.0, 399.0], [62.1, 400.0], [62.2, 400.0], [62.3, 400.0], [62.4, 400.0], [62.5, 400.0], [62.6, 400.0], [62.7, 400.0], [62.8, 400.0], [62.9, 400.0], [63.0, 400.0], [63.1, 400.0], [63.2, 400.0], [63.3, 400.0], [63.4, 400.0], [63.5, 400.0], [63.6, 400.0], [63.7, 400.0], [63.8, 401.0], [63.9, 401.0], [64.0, 401.0], [64.1, 401.0], [64.2, 401.0], [64.3, 401.0], [64.4, 401.0], [64.5, 401.0], [64.6, 401.0], [64.7, 401.0], [64.8, 401.0], [64.9, 401.0], [65.0, 401.0], [65.1, 401.0], [65.2, 401.0], [65.3, 401.0], [65.4, 401.0], [65.5, 401.0], [65.6, 402.0], [65.7, 402.0], [65.8, 402.0], [65.9, 402.0], [66.0, 402.0], [66.1, 402.0], [66.2, 402.0], [66.3, 402.0], [66.4, 402.0], [66.5, 402.0], [66.6, 402.0], [66.7, 402.0], [66.8, 402.0], [66.9, 402.0], [67.0, 402.0], [67.1, 402.0], [67.2, 402.0], [67.3, 402.0], [67.4, 402.0], [67.5, 402.0], [67.6, 402.0], [67.7, 402.0], [67.8, 402.0], [67.9, 402.0], [68.0, 402.0], [68.1, 402.0], [68.2, 402.0], [68.3, 402.0], [68.4, 402.0], [68.5, 402.0], [68.6, 402.0], [68.7, 402.0], [68.8, 402.0], [68.9, 402.0], [69.0, 402.0], [69.1, 402.0], [69.2, 402.0], [69.3, 402.0], [69.4, 402.0], [69.5, 402.0], [69.6, 402.0], [69.7, 402.0], [69.8, 402.0], [69.9, 402.0], [70.0, 402.0], [70.1, 402.0], [70.2, 402.0], [70.3, 402.0], [70.4, 403.0], [70.5, 403.0], [70.6, 403.0], [70.7, 403.0], [70.8, 403.0], [70.9, 403.0], [71.0, 403.0], [71.1, 403.0], [71.2, 403.0], [71.3, 403.0], [71.4, 403.0], [71.5, 403.0], [71.6, 403.0], [71.7, 403.0], [71.8, 403.0], [71.9, 403.0], [72.0, 403.0], [72.1, 403.0], [72.2, 403.0], [72.3, 403.0], [72.4, 403.0], [72.5, 403.0], [72.6, 403.0], [72.7, 403.0], [72.8, 403.0], [72.9, 403.0], [73.0, 403.0], [73.1, 403.0], [73.2, 403.0], [73.3, 403.0], [73.4, 403.0], [73.5, 403.0], [73.6, 403.0], [73.7, 403.0], [73.8, 403.0], [73.9, 403.0], [74.0, 403.0], [74.1, 403.0], [74.2, 403.0], [74.3, 403.0], [74.4, 403.0], [74.5, 403.0], [74.6, 403.0], [74.7, 404.0], [74.8, 404.0], [74.9, 404.0], [75.0, 404.0], [75.1, 404.0], [75.2, 405.0], [75.3, 405.0], [75.4, 405.0], [75.5, 405.0], [75.6, 405.0], [75.7, 405.0], [75.8, 405.0], [75.9, 405.0], [76.0, 406.0], [76.1, 406.0], [76.2, 406.0], [76.3, 406.0], [76.4, 406.0], [76.5, 406.0], [76.6, 406.0], [76.7, 406.0], [76.8, 406.0], [76.9, 406.0], [77.0, 406.0], [77.1, 406.0], [77.2, 406.0], [77.3, 406.0], [77.4, 406.0], [77.5, 406.0], [77.6, 406.0], [77.7, 406.0], [77.8, 406.0], [77.9, 406.0], [78.0, 406.0], [78.1, 406.0], [78.2, 406.0], [78.3, 406.0], [78.4, 406.0], [78.5, 406.0], [78.6, 406.0], [78.7, 406.0], [78.8, 406.0], [78.9, 406.0], [79.0, 406.0], [79.1, 408.0], [79.2, 408.0], [79.3, 408.0], [79.4, 408.0], [79.5, 408.0], [79.6, 408.0], [79.7, 408.0], [79.8, 408.0], [79.9, 408.0], [80.0, 408.0], [80.1, 408.0], [80.2, 408.0], [80.3, 408.0], [80.4, 408.0], [80.5, 408.0], [80.6, 408.0], [80.7, 408.0], [80.8, 408.0], [80.9, 408.0], [81.0, 408.0], [81.1, 408.0], [81.2, 408.0], [81.3, 408.0], [81.4, 408.0], [81.5, 408.0], [81.6, 408.0], [81.7, 409.0], [81.8, 409.0], [81.9, 409.0], [82.0, 409.0], [82.1, 409.0], [82.2, 409.0], [82.3, 409.0], [82.4, 409.0], [82.5, 409.0], [82.6, 409.0], [82.7, 409.0], [82.8, 409.0], [82.9, 409.0], [83.0, 409.0], [83.1, 409.0], [83.2, 409.0], [83.3, 409.0], [83.4, 409.0], [83.5, 410.0], [83.6, 410.0], [83.7, 410.0], [83.8, 410.0], [83.9, 410.0], [84.0, 410.0], [84.1, 410.0], [84.2, 410.0], [84.3, 410.0], [84.4, 410.0], [84.5, 410.0], [84.6, 410.0], [84.7, 410.0], [84.8, 411.0], [84.9, 411.0], [85.0, 411.0], [85.1, 411.0], [85.2, 411.0], [85.3, 411.0], [85.4, 411.0], [85.5, 411.0], [85.6, 411.0], [85.7, 411.0], [85.8, 411.0], [85.9, 411.0], [86.0, 411.0], [86.1, 411.0], [86.2, 411.0], [86.3, 411.0], [86.4, 411.0], [86.5, 411.0], [86.6, 411.0], [86.7, 411.0], [86.8, 411.0], [86.9, 411.0], [87.0, 411.0], [87.1, 411.0], [87.2, 411.0], [87.3, 411.0], [87.4, 411.0], [87.5, 411.0], [87.6, 411.0], [87.7, 411.0], [87.8, 411.0], [87.9, 411.0], [88.0, 411.0], [88.1, 411.0], [88.2, 411.0], [88.3, 413.0], [88.4, 413.0], [88.5, 413.0], [88.6, 413.0], [88.7, 413.0], [88.8, 413.0], [88.9, 413.0], [89.0, 413.0], [89.1, 414.0], [89.2, 414.0], [89.3, 414.0], [89.4, 414.0], [89.5, 414.0], [89.6, 415.0], [89.7, 415.0], [89.8, 415.0], [89.9, 415.0], [90.0, 416.0], [90.1, 416.0], [90.2, 416.0], [90.3, 416.0], [90.4, 417.0], [90.5, 417.0], [90.6, 417.0], [90.7, 417.0], [90.8, 417.0], [90.9, 418.0], [91.0, 418.0], [91.1, 418.0], [91.2, 418.0], [91.3, 428.0], [91.4, 428.0], [91.5, 428.0], [91.6, 428.0], [91.7, 428.0], [91.8, 429.0], [91.9, 429.0], [92.0, 429.0], [92.1, 429.0], [92.2, 429.0], [92.3, 429.0], [92.4, 429.0], [92.5, 429.0], [92.6, 431.0], [92.7, 431.0], [92.8, 431.0], [92.9, 431.0], [93.0, 431.0], [93.1, 432.0], [93.2, 432.0], [93.3, 432.0], [93.4, 432.0], [93.5, 433.0], [93.6, 433.0], [93.7, 433.0], [93.8, 433.0], [93.9, 433.0], [94.0, 433.0], [94.1, 433.0], [94.2, 433.0], [94.3, 433.0], [94.4, 437.0], [94.5, 437.0], [94.6, 437.0], [94.7, 437.0], [94.8, 437.0], [94.9, 437.0], [95.0, 437.0], [95.1, 437.0], [95.2, 438.0], [95.3, 438.0], [95.4, 438.0], [95.5, 438.0], [95.6, 438.0], [95.7, 438.0], [95.8, 438.0], [95.9, 438.0], [96.0, 438.0], [96.1, 438.0], [96.2, 438.0], [96.3, 438.0], [96.4, 438.0], [96.5, 438.0], [96.6, 438.0], [96.7, 438.0], [96.8, 438.0], [96.9, 438.0], [97.0, 439.0], [97.1, 439.0], [97.2, 439.0], [97.3, 439.0], [97.4, 439.0], [97.5, 439.0], [97.6, 439.0], [97.7, 439.0], [97.8, 439.0], [97.9, 440.0], [98.0, 440.0], [98.1, 440.0], [98.2, 440.0], [98.3, 452.0], [98.4, 452.0], [98.5, 452.0], [98.6, 452.0], [98.7, 458.0], [98.8, 458.0], [98.9, 458.0], [99.0, 458.0], [99.1, 458.0], [99.2, 458.0], [99.3, 458.0], [99.4, 458.0], [99.5, 458.0], [99.6, 491.0], [99.7, 491.0], [99.8, 491.0], [99.9, 491.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 87.0, "minX": 300.0, "maxY": 142.0, "series": [{"data": [[300.0, 142.0], [400.0, 87.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 228.0, "series": [{"data": [[0.0, 228.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 10.397849462365588, "minX": 1.6218738E12, "maxY": 13.911764705882351, "series": [{"data": [[1.6218738E12, 10.397849462365588], [1.62187386E12, 13.911764705882351]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62187386E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 316.6666666666667, "minX": 1.0, "maxY": 401.0251572327042, "series": [{"data": [[2.0, 321.0], [8.0, 331.0], [9.0, 342.66666666666663], [10.0, 344.42857142857144], [11.0, 373.1818181818182], [3.0, 322.5], [12.0, 368.0], [13.0, 368.9], [14.0, 401.0251572327042], [1.0, 337.0], [4.0, 316.6666666666667], [5.0, 326.5], [6.0, 337.25], [7.0, 326.6]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[12.484716157205236, 385.0829694323145]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 14.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 240.25, "minX": 1.6218738E12, "maxY": 831.8666666666667, "series": [{"data": [[1.6218738E12, 568.85], [1.62187386E12, 831.8666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6218738E12, 240.25], [1.62187386E12, 351.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62187386E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 353.0322580645162, "minX": 1.6218738E12, "maxY": 406.99999999999983, "series": [{"data": [[1.6218738E12, 353.0322580645162], [1.62187386E12, 406.99999999999983]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62187386E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 352.9569892473118, "minX": 1.6218738E12, "maxY": 406.97794117647044, "series": [{"data": [[1.6218738E12, 352.9569892473118], [1.62187386E12, 406.97794117647044]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62187386E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.6218738E12, "maxY": 0.13978494623655915, "series": [{"data": [[1.6218738E12, 0.13978494623655915], [1.62187386E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62187386E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 310.0, "minX": 1.6218738E12, "maxY": 458.0, "series": [{"data": [[1.6218738E12, 391.0], [1.62187386E12, 458.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6218738E12, 377.6], [1.62187386E12, 433.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6218738E12, 391.0], [1.62187386E12, 458.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6218738E12, 381.5], [1.62187386E12, 438.2]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6218738E12, 310.0], [1.62187386E12, 378.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6218738E12, 362.0], [1.62187386E12, 402.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62187386E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 318.0, "minX": 1.0, "maxY": 491.0, "series": [{"data": [[1.0, 337.0], [2.0, 322.5], [4.0, 327.5], [8.0, 374.0], [9.0, 398.0], [5.0, 327.0], [10.0, 399.0], [3.0, 318.0], [6.0, 338.0], [7.0, 343.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[6.0, 491.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 318.0, "minX": 1.0, "maxY": 491.0, "series": [{"data": [[1.0, 337.0], [2.0, 322.5], [4.0, 327.0], [8.0, 374.0], [9.0, 398.0], [5.0, 327.0], [10.0, 399.0], [3.0, 318.0], [6.0, 338.0], [7.0, 343.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[6.0, 491.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.55, "minX": 1.6218738E12, "maxY": 2.2666666666666666, "series": [{"data": [[1.6218738E12, 1.55], [1.62187386E12, 2.2666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62187386E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.55, "minX": 1.6218738E12, "maxY": 2.2666666666666666, "series": [{"data": [[1.6218738E12, 1.55], [1.62187386E12, 2.2666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62187386E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6218738E12, "maxY": 2.25, "series": [{"data": [[1.6218738E12, 1.55], [1.62187386E12, 2.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.62187386E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62187386E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6218738E12, "maxY": 2.25, "series": [{"data": [[1.6218738E12, 1.55], [1.62187386E12, 2.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62187386E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62187386E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

