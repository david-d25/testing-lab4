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
        data: {"result": {"minY": 42.0, "minX": 0.0, "maxY": 3125.0, "series": [{"data": [[0.0, 42.0], [0.1, 234.0], [0.2, 248.0], [0.3, 255.0], [0.4, 263.0], [0.5, 269.0], [0.6, 276.0], [0.7, 281.0], [0.8, 288.0], [0.9, 291.0], [1.0, 296.0], [1.1, 301.0], [1.2, 306.0], [1.3, 311.0], [1.4, 315.0], [1.5, 321.0], [1.6, 326.0], [1.7, 331.0], [1.8, 334.0], [1.9, 338.0], [2.0, 341.0], [2.1, 344.0], [2.2, 347.0], [2.3, 353.0], [2.4, 356.0], [2.5, 360.0], [2.6, 366.0], [2.7, 370.0], [2.8, 373.0], [2.9, 377.0], [3.0, 382.0], [3.1, 385.0], [3.2, 390.0], [3.3, 394.0], [3.4, 398.0], [3.5, 401.0], [3.6, 405.0], [3.7, 408.0], [3.8, 412.0], [3.9, 416.0], [4.0, 419.0], [4.1, 424.0], [4.2, 429.0], [4.3, 434.0], [4.4, 437.0], [4.5, 440.0], [4.6, 444.0], [4.7, 447.0], [4.8, 451.0], [4.9, 457.0], [5.0, 463.0], [5.1, 468.0], [5.2, 471.0], [5.3, 475.0], [5.4, 478.0], [5.5, 485.0], [5.6, 488.0], [5.7, 491.0], [5.8, 494.0], [5.9, 499.0], [6.0, 504.0], [6.1, 509.0], [6.2, 514.0], [6.3, 520.0], [6.4, 526.0], [6.5, 529.0], [6.6, 532.0], [6.7, 534.0], [6.8, 537.0], [6.9, 540.0], [7.0, 544.0], [7.1, 549.0], [7.2, 553.0], [7.3, 558.0], [7.4, 562.0], [7.5, 565.0], [7.6, 569.0], [7.7, 572.0], [7.8, 577.0], [7.9, 584.0], [8.0, 588.0], [8.1, 593.0], [8.2, 599.0], [8.3, 604.0], [8.4, 609.0], [8.5, 613.0], [8.6, 618.0], [8.7, 622.0], [8.8, 627.0], [8.9, 632.0], [9.0, 637.0], [9.1, 641.0], [9.2, 646.0], [9.3, 648.0], [9.4, 652.0], [9.5, 656.0], [9.6, 660.0], [9.7, 665.0], [9.8, 670.0], [9.9, 674.0], [10.0, 678.0], [10.1, 684.0], [10.2, 688.0], [10.3, 695.0], [10.4, 701.0], [10.5, 710.0], [10.6, 714.0], [10.7, 719.0], [10.8, 724.0], [10.9, 729.0], [11.0, 734.0], [11.1, 738.0], [11.2, 742.0], [11.3, 747.0], [11.4, 752.0], [11.5, 759.0], [11.6, 767.0], [11.7, 771.0], [11.8, 775.0], [11.9, 781.0], [12.0, 788.0], [12.1, 795.0], [12.2, 802.0], [12.3, 807.0], [12.4, 813.0], [12.5, 818.0], [12.6, 821.0], [12.7, 824.0], [12.8, 828.0], [12.9, 831.0], [13.0, 837.0], [13.1, 842.0], [13.2, 848.0], [13.3, 853.0], [13.4, 858.0], [13.5, 864.0], [13.6, 869.0], [13.7, 873.0], [13.8, 880.0], [13.9, 884.0], [14.0, 888.0], [14.1, 896.0], [14.2, 904.0], [14.3, 910.0], [14.4, 918.0], [14.5, 924.0], [14.6, 930.0], [14.7, 936.0], [14.8, 944.0], [14.9, 948.0], [15.0, 953.0], [15.1, 958.0], [15.2, 963.0], [15.3, 967.0], [15.4, 973.0], [15.5, 978.0], [15.6, 982.0], [15.7, 986.0], [15.8, 993.0], [15.9, 1000.0], [16.0, 1007.0], [16.1, 1013.0], [16.2, 1017.0], [16.3, 1021.0], [16.4, 1026.0], [16.5, 1031.0], [16.6, 1036.0], [16.7, 1042.0], [16.8, 1048.0], [16.9, 1054.0], [17.0, 1059.0], [17.1, 1064.0], [17.2, 1070.0], [17.3, 1075.0], [17.4, 1080.0], [17.5, 1083.0], [17.6, 1090.0], [17.7, 1096.0], [17.8, 1102.0], [17.9, 1105.0], [18.0, 1112.0], [18.1, 1121.0], [18.2, 1129.0], [18.3, 1137.0], [18.4, 1146.0], [18.5, 1155.0], [18.6, 1159.0], [18.7, 1165.0], [18.8, 1170.0], [18.9, 1176.0], [19.0, 1185.0], [19.1, 1195.0], [19.2, 1204.0], [19.3, 1217.0], [19.4, 1223.0], [19.5, 1231.0], [19.6, 1245.0], [19.7, 1253.0], [19.8, 1261.0], [19.9, 1269.0], [20.0, 1276.0], [20.1, 1281.0], [20.2, 1287.0], [20.3, 1295.0], [20.4, 1300.0], [20.5, 1304.0], [20.6, 1313.0], [20.7, 1320.0], [20.8, 1328.0], [20.9, 1337.0], [21.0, 1345.0], [21.1, 1352.0], [21.2, 1360.0], [21.3, 1365.0], [21.4, 1370.0], [21.5, 1375.0], [21.6, 1380.0], [21.7, 1385.0], [21.8, 1389.0], [21.9, 1395.0], [22.0, 1399.0], [22.1, 1404.0], [22.2, 1409.0], [22.3, 1413.0], [22.4, 1419.0], [22.5, 1421.0], [22.6, 1427.0], [22.7, 1431.0], [22.8, 1436.0], [22.9, 1440.0], [23.0, 1446.0], [23.1, 1448.0], [23.2, 1457.0], [23.3, 1460.0], [23.4, 1467.0], [23.5, 1474.0], [23.6, 1481.0], [23.7, 1485.0], [23.8, 1492.0], [23.9, 1496.0], [24.0, 1499.0], [24.1, 1503.0], [24.2, 1505.0], [24.3, 1511.0], [24.4, 1515.0], [24.5, 1520.0], [24.6, 1524.0], [24.7, 1529.0], [24.8, 1534.0], [24.9, 1539.0], [25.0, 1544.0], [25.1, 1547.0], [25.2, 1551.0], [25.3, 1554.0], [25.4, 1556.0], [25.5, 1559.0], [25.6, 1561.0], [25.7, 1564.0], [25.8, 1569.0], [25.9, 1572.0], [26.0, 1577.0], [26.1, 1580.0], [26.2, 1585.0], [26.3, 1590.0], [26.4, 1592.0], [26.5, 1595.0], [26.6, 1599.0], [26.7, 1602.0], [26.8, 1605.0], [26.9, 1609.0], [27.0, 1613.0], [27.1, 1616.0], [27.2, 1618.0], [27.3, 1619.0], [27.4, 1621.0], [27.5, 1624.0], [27.6, 1627.0], [27.7, 1629.0], [27.8, 1632.0], [27.9, 1634.0], [28.0, 1635.0], [28.1, 1638.0], [28.2, 1641.0], [28.3, 1643.0], [28.4, 1645.0], [28.5, 1647.0], [28.6, 1649.0], [28.7, 1651.0], [28.8, 1653.0], [28.9, 1655.0], [29.0, 1658.0], [29.1, 1660.0], [29.2, 1662.0], [29.3, 1663.0], [29.4, 1666.0], [29.5, 1669.0], [29.6, 1673.0], [29.7, 1674.0], [29.8, 1676.0], [29.9, 1677.0], [30.0, 1679.0], [30.1, 1680.0], [30.2, 1683.0], [30.3, 1686.0], [30.4, 1689.0], [30.5, 1690.0], [30.6, 1692.0], [30.7, 1694.0], [30.8, 1695.0], [30.9, 1698.0], [31.0, 1701.0], [31.1, 1703.0], [31.2, 1706.0], [31.3, 1707.0], [31.4, 1709.0], [31.5, 1712.0], [31.6, 1715.0], [31.7, 1717.0], [31.8, 1719.0], [31.9, 1721.0], [32.0, 1724.0], [32.1, 1727.0], [32.2, 1730.0], [32.3, 1733.0], [32.4, 1735.0], [32.5, 1736.0], [32.6, 1739.0], [32.7, 1740.0], [32.8, 1742.0], [32.9, 1743.0], [33.0, 1746.0], [33.1, 1749.0], [33.2, 1751.0], [33.3, 1753.0], [33.4, 1755.0], [33.5, 1757.0], [33.6, 1759.0], [33.7, 1761.0], [33.8, 1764.0], [33.9, 1768.0], [34.0, 1770.0], [34.1, 1772.0], [34.2, 1773.0], [34.3, 1776.0], [34.4, 1779.0], [34.5, 1781.0], [34.6, 1782.0], [34.7, 1783.0], [34.8, 1784.0], [34.9, 1787.0], [35.0, 1790.0], [35.1, 1793.0], [35.2, 1797.0], [35.3, 1800.0], [35.4, 1802.0], [35.5, 1803.0], [35.6, 1806.0], [35.7, 1807.0], [35.8, 1808.0], [35.9, 1809.0], [36.0, 1810.0], [36.1, 1813.0], [36.2, 1815.0], [36.3, 1817.0], [36.4, 1819.0], [36.5, 1821.0], [36.6, 1824.0], [36.7, 1825.0], [36.8, 1827.0], [36.9, 1828.0], [37.0, 1830.0], [37.1, 1832.0], [37.2, 1834.0], [37.3, 1835.0], [37.4, 1837.0], [37.5, 1840.0], [37.6, 1842.0], [37.7, 1845.0], [37.8, 1847.0], [37.9, 1849.0], [38.0, 1851.0], [38.1, 1852.0], [38.2, 1853.0], [38.3, 1855.0], [38.4, 1857.0], [38.5, 1859.0], [38.6, 1863.0], [38.7, 1865.0], [38.8, 1867.0], [38.9, 1869.0], [39.0, 1870.0], [39.1, 1871.0], [39.2, 1874.0], [39.3, 1876.0], [39.4, 1879.0], [39.5, 1880.0], [39.6, 1883.0], [39.7, 1887.0], [39.8, 1889.0], [39.9, 1891.0], [40.0, 1893.0], [40.1, 1894.0], [40.2, 1896.0], [40.3, 1899.0], [40.4, 1901.0], [40.5, 1903.0], [40.6, 1904.0], [40.7, 1906.0], [40.8, 1909.0], [40.9, 1911.0], [41.0, 1912.0], [41.1, 1914.0], [41.2, 1916.0], [41.3, 1919.0], [41.4, 1922.0], [41.5, 1924.0], [41.6, 1926.0], [41.7, 1928.0], [41.8, 1929.0], [41.9, 1931.0], [42.0, 1932.0], [42.1, 1934.0], [42.2, 1936.0], [42.3, 1938.0], [42.4, 1942.0], [42.5, 1944.0], [42.6, 1945.0], [42.7, 1948.0], [42.8, 1950.0], [42.9, 1951.0], [43.0, 1953.0], [43.1, 1957.0], [43.2, 1959.0], [43.3, 1960.0], [43.4, 1961.0], [43.5, 1963.0], [43.6, 1964.0], [43.7, 1965.0], [43.8, 1968.0], [43.9, 1971.0], [44.0, 1974.0], [44.1, 1976.0], [44.2, 1978.0], [44.3, 1979.0], [44.4, 1981.0], [44.5, 1982.0], [44.6, 1984.0], [44.7, 1986.0], [44.8, 1990.0], [44.9, 1992.0], [45.0, 1994.0], [45.1, 1996.0], [45.2, 1997.0], [45.3, 1999.0], [45.4, 2001.0], [45.5, 2002.0], [45.6, 2005.0], [45.7, 2007.0], [45.8, 2009.0], [45.9, 2010.0], [46.0, 2012.0], [46.1, 2013.0], [46.2, 2016.0], [46.3, 2018.0], [46.4, 2020.0], [46.5, 2022.0], [46.6, 2024.0], [46.7, 2026.0], [46.8, 2029.0], [46.9, 2031.0], [47.0, 2036.0], [47.1, 2038.0], [47.2, 2040.0], [47.3, 2042.0], [47.4, 2044.0], [47.5, 2045.0], [47.6, 2046.0], [47.7, 2048.0], [47.8, 2049.0], [47.9, 2050.0], [48.0, 2051.0], [48.1, 2052.0], [48.2, 2053.0], [48.3, 2055.0], [48.4, 2057.0], [48.5, 2060.0], [48.6, 2062.0], [48.7, 2064.0], [48.8, 2066.0], [48.9, 2068.0], [49.0, 2070.0], [49.1, 2072.0], [49.2, 2075.0], [49.3, 2077.0], [49.4, 2078.0], [49.5, 2080.0], [49.6, 2084.0], [49.7, 2085.0], [49.8, 2087.0], [49.9, 2090.0], [50.0, 2092.0], [50.1, 2095.0], [50.2, 2097.0], [50.3, 2099.0], [50.4, 2100.0], [50.5, 2101.0], [50.6, 2102.0], [50.7, 2103.0], [50.8, 2104.0], [50.9, 2105.0], [51.0, 2107.0], [51.1, 2108.0], [51.2, 2111.0], [51.3, 2114.0], [51.4, 2115.0], [51.5, 2117.0], [51.6, 2119.0], [51.7, 2122.0], [51.8, 2125.0], [51.9, 2128.0], [52.0, 2130.0], [52.1, 2132.0], [52.2, 2135.0], [52.3, 2136.0], [52.4, 2138.0], [52.5, 2139.0], [52.6, 2140.0], [52.7, 2142.0], [52.8, 2143.0], [52.9, 2145.0], [53.0, 2148.0], [53.1, 2151.0], [53.2, 2152.0], [53.3, 2154.0], [53.4, 2155.0], [53.5, 2157.0], [53.6, 2158.0], [53.7, 2159.0], [53.8, 2162.0], [53.9, 2164.0], [54.0, 2169.0], [54.1, 2170.0], [54.2, 2171.0], [54.3, 2173.0], [54.4, 2174.0], [54.5, 2176.0], [54.6, 2178.0], [54.7, 2181.0], [54.8, 2183.0], [54.9, 2184.0], [55.0, 2186.0], [55.1, 2187.0], [55.2, 2190.0], [55.3, 2192.0], [55.4, 2194.0], [55.5, 2196.0], [55.6, 2197.0], [55.7, 2198.0], [55.8, 2199.0], [55.9, 2201.0], [56.0, 2203.0], [56.1, 2204.0], [56.2, 2207.0], [56.3, 2209.0], [56.4, 2212.0], [56.5, 2214.0], [56.6, 2215.0], [56.7, 2217.0], [56.8, 2219.0], [56.9, 2221.0], [57.0, 2222.0], [57.1, 2224.0], [57.2, 2225.0], [57.3, 2227.0], [57.4, 2230.0], [57.5, 2231.0], [57.6, 2232.0], [57.7, 2234.0], [57.8, 2237.0], [57.9, 2239.0], [58.0, 2242.0], [58.1, 2244.0], [58.2, 2245.0], [58.3, 2246.0], [58.4, 2248.0], [58.5, 2249.0], [58.6, 2251.0], [58.7, 2253.0], [58.8, 2256.0], [58.9, 2259.0], [59.0, 2261.0], [59.1, 2263.0], [59.2, 2265.0], [59.3, 2267.0], [59.4, 2269.0], [59.5, 2270.0], [59.6, 2272.0], [59.7, 2274.0], [59.8, 2277.0], [59.9, 2279.0], [60.0, 2280.0], [60.1, 2282.0], [60.2, 2285.0], [60.3, 2286.0], [60.4, 2288.0], [60.5, 2290.0], [60.6, 2292.0], [60.7, 2294.0], [60.8, 2295.0], [60.9, 2296.0], [61.0, 2297.0], [61.1, 2299.0], [61.2, 2301.0], [61.3, 2303.0], [61.4, 2304.0], [61.5, 2307.0], [61.6, 2310.0], [61.7, 2312.0], [61.8, 2313.0], [61.9, 2314.0], [62.0, 2316.0], [62.1, 2317.0], [62.2, 2319.0], [62.3, 2322.0], [62.4, 2323.0], [62.5, 2324.0], [62.6, 2325.0], [62.7, 2327.0], [62.8, 2329.0], [62.9, 2330.0], [63.0, 2336.0], [63.1, 2339.0], [63.2, 2341.0], [63.3, 2342.0], [63.4, 2343.0], [63.5, 2344.0], [63.6, 2346.0], [63.7, 2348.0], [63.8, 2350.0], [63.9, 2354.0], [64.0, 2356.0], [64.1, 2357.0], [64.2, 2358.0], [64.3, 2359.0], [64.4, 2360.0], [64.5, 2362.0], [64.6, 2364.0], [64.7, 2365.0], [64.8, 2367.0], [64.9, 2370.0], [65.0, 2371.0], [65.1, 2372.0], [65.2, 2373.0], [65.3, 2374.0], [65.4, 2376.0], [65.5, 2378.0], [65.6, 2379.0], [65.7, 2380.0], [65.8, 2382.0], [65.9, 2384.0], [66.0, 2386.0], [66.1, 2388.0], [66.2, 2389.0], [66.3, 2390.0], [66.4, 2391.0], [66.5, 2393.0], [66.6, 2395.0], [66.7, 2397.0], [66.8, 2399.0], [66.9, 2403.0], [67.0, 2407.0], [67.1, 2409.0], [67.2, 2411.0], [67.3, 2412.0], [67.4, 2414.0], [67.5, 2416.0], [67.6, 2419.0], [67.7, 2421.0], [67.8, 2423.0], [67.9, 2424.0], [68.0, 2425.0], [68.1, 2426.0], [68.2, 2427.0], [68.3, 2428.0], [68.4, 2429.0], [68.5, 2431.0], [68.6, 2432.0], [68.7, 2434.0], [68.8, 2436.0], [68.9, 2438.0], [69.0, 2440.0], [69.1, 2443.0], [69.2, 2445.0], [69.3, 2447.0], [69.4, 2450.0], [69.5, 2453.0], [69.6, 2455.0], [69.7, 2457.0], [69.8, 2458.0], [69.9, 2460.0], [70.0, 2461.0], [70.1, 2463.0], [70.2, 2465.0], [70.3, 2467.0], [70.4, 2469.0], [70.5, 2471.0], [70.6, 2472.0], [70.7, 2473.0], [70.8, 2474.0], [70.9, 2475.0], [71.0, 2476.0], [71.1, 2478.0], [71.2, 2479.0], [71.3, 2481.0], [71.4, 2483.0], [71.5, 2484.0], [71.6, 2486.0], [71.7, 2488.0], [71.8, 2490.0], [71.9, 2492.0], [72.0, 2495.0], [72.1, 2498.0], [72.2, 2500.0], [72.3, 2501.0], [72.4, 2502.0], [72.5, 2503.0], [72.6, 2504.0], [72.7, 2506.0], [72.8, 2509.0], [72.9, 2512.0], [73.0, 2513.0], [73.1, 2515.0], [73.2, 2516.0], [73.3, 2517.0], [73.4, 2517.0], [73.5, 2519.0], [73.6, 2521.0], [73.7, 2523.0], [73.8, 2525.0], [73.9, 2528.0], [74.0, 2529.0], [74.1, 2530.0], [74.2, 2531.0], [74.3, 2531.0], [74.4, 2532.0], [74.5, 2533.0], [74.6, 2535.0], [74.7, 2537.0], [74.8, 2542.0], [74.9, 2545.0], [75.0, 2547.0], [75.1, 2548.0], [75.2, 2549.0], [75.3, 2552.0], [75.4, 2553.0], [75.5, 2555.0], [75.6, 2557.0], [75.7, 2559.0], [75.8, 2561.0], [75.9, 2562.0], [76.0, 2564.0], [76.1, 2566.0], [76.2, 2568.0], [76.3, 2569.0], [76.4, 2572.0], [76.5, 2574.0], [76.6, 2575.0], [76.7, 2577.0], [76.8, 2579.0], [76.9, 2580.0], [77.0, 2581.0], [77.1, 2583.0], [77.2, 2584.0], [77.3, 2586.0], [77.4, 2588.0], [77.5, 2591.0], [77.6, 2593.0], [77.7, 2595.0], [77.8, 2597.0], [77.9, 2599.0], [78.0, 2600.0], [78.1, 2601.0], [78.2, 2601.0], [78.3, 2602.0], [78.4, 2604.0], [78.5, 2606.0], [78.6, 2609.0], [78.7, 2612.0], [78.8, 2614.0], [78.9, 2615.0], [79.0, 2616.0], [79.1, 2616.0], [79.2, 2617.0], [79.3, 2619.0], [79.4, 2621.0], [79.5, 2623.0], [79.6, 2624.0], [79.7, 2626.0], [79.8, 2629.0], [79.9, 2630.0], [80.0, 2631.0], [80.1, 2632.0], [80.2, 2634.0], [80.3, 2638.0], [80.4, 2642.0], [80.5, 2644.0], [80.6, 2645.0], [80.7, 2646.0], [80.8, 2647.0], [80.9, 2649.0], [81.0, 2650.0], [81.1, 2651.0], [81.2, 2654.0], [81.3, 2656.0], [81.4, 2659.0], [81.5, 2661.0], [81.6, 2664.0], [81.7, 2666.0], [81.8, 2670.0], [81.9, 2671.0], [82.0, 2672.0], [82.1, 2674.0], [82.2, 2675.0], [82.3, 2677.0], [82.4, 2678.0], [82.5, 2678.0], [82.6, 2679.0], [82.7, 2680.0], [82.8, 2681.0], [82.9, 2682.0], [83.0, 2683.0], [83.1, 2684.0], [83.2, 2686.0], [83.3, 2688.0], [83.4, 2689.0], [83.5, 2691.0], [83.6, 2693.0], [83.7, 2694.0], [83.8, 2696.0], [83.9, 2698.0], [84.0, 2699.0], [84.1, 2701.0], [84.2, 2703.0], [84.3, 2704.0], [84.4, 2705.0], [84.5, 2706.0], [84.6, 2707.0], [84.7, 2708.0], [84.8, 2710.0], [84.9, 2711.0], [85.0, 2712.0], [85.1, 2714.0], [85.2, 2719.0], [85.3, 2722.0], [85.4, 2723.0], [85.5, 2723.0], [85.6, 2725.0], [85.7, 2725.0], [85.8, 2727.0], [85.9, 2729.0], [86.0, 2734.0], [86.1, 2736.0], [86.2, 2738.0], [86.3, 2740.0], [86.4, 2741.0], [86.5, 2742.0], [86.6, 2743.0], [86.7, 2745.0], [86.8, 2747.0], [86.9, 2751.0], [87.0, 2752.0], [87.1, 2753.0], [87.2, 2754.0], [87.3, 2756.0], [87.4, 2757.0], [87.5, 2759.0], [87.6, 2759.0], [87.7, 2761.0], [87.8, 2763.0], [87.9, 2765.0], [88.0, 2766.0], [88.1, 2767.0], [88.2, 2769.0], [88.3, 2770.0], [88.4, 2771.0], [88.5, 2774.0], [88.6, 2776.0], [88.7, 2780.0], [88.8, 2782.0], [88.9, 2783.0], [89.0, 2784.0], [89.1, 2785.0], [89.2, 2786.0], [89.3, 2789.0], [89.4, 2791.0], [89.5, 2794.0], [89.6, 2796.0], [89.7, 2798.0], [89.8, 2798.0], [89.9, 2800.0], [90.0, 2802.0], [90.1, 2803.0], [90.2, 2804.0], [90.3, 2805.0], [90.4, 2808.0], [90.5, 2811.0], [90.6, 2812.0], [90.7, 2813.0], [90.8, 2815.0], [90.9, 2816.0], [91.0, 2817.0], [91.1, 2820.0], [91.2, 2824.0], [91.3, 2827.0], [91.4, 2828.0], [91.5, 2829.0], [91.6, 2829.0], [91.7, 2830.0], [91.8, 2830.0], [91.9, 2831.0], [92.0, 2832.0], [92.1, 2833.0], [92.2, 2835.0], [92.3, 2837.0], [92.4, 2839.0], [92.5, 2841.0], [92.6, 2843.0], [92.7, 2844.0], [92.8, 2845.0], [92.9, 2847.0], [93.0, 2848.0], [93.1, 2850.0], [93.2, 2853.0], [93.3, 2855.0], [93.4, 2856.0], [93.5, 2858.0], [93.6, 2859.0], [93.7, 2861.0], [93.8, 2862.0], [93.9, 2864.0], [94.0, 2866.0], [94.1, 2867.0], [94.2, 2869.0], [94.3, 2871.0], [94.4, 2873.0], [94.5, 2874.0], [94.6, 2875.0], [94.7, 2877.0], [94.8, 2878.0], [94.9, 2881.0], [95.0, 2884.0], [95.1, 2886.0], [95.2, 2888.0], [95.3, 2889.0], [95.4, 2890.0], [95.5, 2890.0], [95.6, 2891.0], [95.7, 2892.0], [95.8, 2892.0], [95.9, 2893.0], [96.0, 2894.0], [96.1, 2896.0], [96.2, 2899.0], [96.3, 2900.0], [96.4, 2902.0], [96.5, 2906.0], [96.6, 2907.0], [96.7, 2910.0], [96.8, 2912.0], [96.9, 2918.0], [97.0, 2922.0], [97.1, 2923.0], [97.2, 2925.0], [97.3, 2928.0], [97.4, 2929.0], [97.5, 2933.0], [97.6, 2935.0], [97.7, 2940.0], [97.8, 2941.0], [97.9, 2943.0], [98.0, 2946.0], [98.1, 2949.0], [98.2, 2951.0], [98.3, 2952.0], [98.4, 2953.0], [98.5, 2953.0], [98.6, 2955.0], [98.7, 2957.0], [98.8, 2960.0], [98.9, 2967.0], [99.0, 2973.0], [99.1, 2977.0], [99.2, 2980.0], [99.3, 2988.0], [99.4, 2994.0], [99.5, 3003.0], [99.6, 3006.0], [99.7, 3010.0], [99.8, 3017.0], [99.9, 3038.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 1281.0, "series": [{"data": [[0.0, 2.0], [600.0, 433.0], [700.0, 364.0], [800.0, 395.0], [900.0, 351.0], [1000.0, 376.0], [1100.0, 281.0], [1200.0, 249.0], [1300.0, 325.0], [1400.0, 401.0], [1500.0, 525.0], [1600.0, 872.0], [100.0, 13.0], [1700.0, 862.0], [1800.0, 1025.0], [1900.0, 1002.0], [2000.0, 1013.0], [2100.0, 1093.0], [2200.0, 1072.0], [2300.0, 1140.0], [2400.0, 1083.0], [2500.0, 1159.0], [2600.0, 1218.0], [2700.0, 1181.0], [2800.0, 1281.0], [2900.0, 642.0], [3000.0, 105.0], [3100.0, 3.0], [200.0, 201.0], [300.0, 475.0], [400.0, 498.0], [500.0, 462.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 150.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 15198.0, "series": [{"data": [[0.0, 1162.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3592.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 15198.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 150.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.819148936170214, "minX": 1.62196416E12, "maxY": 135.29168167086806, "series": [{"data": [[1.62196446E12, 79.27735773975343], [1.62196428E12, 34.785401459853965], [1.62196458E12, 109.27629168193484], [1.6219644E12, 64.32242990654221], [1.62196422E12, 20.14621409921669], [1.62196452E12, 94.28875379939218], [1.6219647E12, 135.29168167086806], [1.62196434E12, 49.62564102564101], [1.62196464E12, 124.26496634785696], [1.62196416E12, 7.819148936170214]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6219647E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 243.16666666666666, "minX": 1.0, "maxY": 2923.3737373737376, "series": [{"data": [[2.0, 243.16666666666666], [3.0, 423.44444444444446], [4.0, 250.27272727272728], [5.0, 365.4], [6.0, 348.88888888888886], [7.0, 357.45000000000005], [8.0, 295.1739130434782], [9.0, 303.31999999999994], [10.0, 348.17857142857144], [11.0, 376.0322580645161], [12.0, 378.2424242424243], [13.0, 306.25], [14.0, 332.71794871794884], [15.0, 393.8048780487805], [16.0, 341.9318181818182], [17.0, 352.4893617021277], [18.0, 370.57142857142856], [19.0, 410.28846153846166], [20.0, 417.36363636363643], [21.0, 383.8421052631581], [22.0, 421.19999999999993], [23.0, 416.73015873015885], [24.0, 451.7999999999999], [25.0, 461.514705882353], [26.0, 446.6478873239438], [27.0, 471.50684931506845], [28.0, 510.8026315789473], [29.0, 512.0571428571429], [30.0, 512.7721518987343], [31.0, 539.4999999999998], [32.0, 551.953488372093], [33.0, 561.659090909091], [34.0, 578.4285714285717], [35.0, 607.2000000000003], [36.0, 652.8571428571429], [37.0, 667.49], [38.0, 679.6372549019604], [39.0, 692.7809523809526], [40.0, 755.532110091743], [41.0, 753.5000000000003], [42.0, 808.0530973451326], [43.0, 816.6086956521739], [44.0, 838.7179487179487], [45.0, 878.3801652892563], [46.0, 905.2520325203251], [47.0, 960.3515624999998], [48.0, 996.6511627906974], [49.0, 1013.4126984126985], [50.0, 1037.467741935483], [51.0, 1093.3722627737225], [52.0, 1135.31654676259], [53.0, 1187.0352112676053], [54.0, 1234.8333333333333], [55.0, 1297.1428571428573], [56.0, 1371.846666666667], [57.0, 1366.7857142857147], [58.0, 1451.5761589403971], [59.0, 1477.8211920529793], [60.0, 1482.867088607595], [61.0, 1565.2999999999993], [62.0, 1586.12962962963], [63.0, 1588.8447204968943], [64.0, 1627.591194968554], [65.0, 1637.329032258064], [66.0, 1669.8343558282206], [67.0, 1649.0443037974683], [68.0, 1687.9259259259263], [69.0, 1719.6729559748437], [70.0, 1720.5644171779143], [71.0, 1741.7951807228915], [72.0, 1768.5722891566268], [73.0, 1768.374233128834], [74.0, 1790.4848484848483], [75.0, 1816.7844311377241], [76.0, 1826.5808383233534], [77.0, 1841.5542168674704], [78.0, 1863.3575757575754], [79.0, 1881.1017964071862], [80.0, 1894.4385964912276], [81.0, 1892.236686390533], [82.0, 1933.770588235294], [83.0, 1945.378698224852], [84.0, 1964.1676300578042], [85.0, 1983.711764705882], [86.0, 1996.111111111111], [87.0, 1988.7485714285715], [88.0, 2043.6686046511622], [89.0, 2040.8228571428572], [90.0, 2059.02857142857], [91.0, 2079.3908045977], [92.0, 2097.460227272727], [93.0, 2117.7670454545473], [94.0, 2124.142857142857], [95.0, 2154.932584269664], [96.0, 2161.1704545454545], [97.0, 2180.6045197740127], [98.0, 2191.8994413407822], [99.0, 2212.841807909604], [100.0, 2235.162011173184], [101.0, 2248.6685082872914], [102.0, 2260.4475138121543], [103.0, 2284.948275862068], [104.0, 2304.12834224599], [105.0, 2310.082872928176], [106.0, 2343.2872928176776], [107.0, 2341.320652173914], [108.0, 2362.4754098360663], [109.0, 2372.6187845303866], [110.0, 2397.9672131147536], [111.0, 2413.2513661202197], [112.0, 2407.8532608695637], [113.0, 2438.229946524065], [114.0, 2464.8423913043484], [115.0, 2469.929347826085], [116.0, 2493.4866310160432], [117.0, 2511.6613756613738], [118.0, 2528.326086956521], [119.0, 2543.872340425533], [120.0, 2553.844919786096], [121.0, 2570.399999999999], [122.0, 2588.5161290322553], [123.0, 2604.4414893617018], [124.0, 2623.109375000001], [125.0, 2641.8823529411775], [126.0, 2655.6137566137554], [127.0, 2672.2789473684215], [128.0, 2686.8541666666674], [129.0, 2686.251282051282], [130.0, 2719.573684210528], [131.0, 2737.7446808510626], [132.0, 2745.3711340206187], [133.0, 2767.2631578947376], [134.0, 2773.1082474226805], [135.0, 2801.7897435897435], [136.0, 2817.4093264248704], [137.0, 2814.1443298969075], [138.0, 2854.2448979591827], [139.0, 2857.406250000001], [140.0, 2870.890052356021], [141.0, 2887.376884422108], [142.0, 2923.3737373737376], [143.0, 2921.3437499999986], [144.0, 2882.936274509804], [145.0, 2838.211180124223], [146.0, 860.3333333333334], [1.0, 297.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[88.7899214008557, 1942.5402447517642]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 146.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 485.6666666666667, "minX": 1.62196416E12, "maxY": 22457.816666666666, "series": [{"data": [[1.62196446E12, 15371.183333333332], [1.62196428E12, 8379.833333333334], [1.62196458E12, 16692.383333333335], [1.6219644E12, 14398.633333333333], [1.62196422E12, 4685.366666666667], [1.62196452E12, 16099.066666666668], [1.6219647E12, 22457.816666666666], [1.62196434E12, 11927.5], [1.62196464E12, 17267.35], [1.62196416E12, 1149.9333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62196446E12, 6491.916666666667], [1.62196428E12, 3539.1666666666665], [1.62196458E12, 7049.916666666667], [1.6219644E12, 6081.166666666667], [1.62196422E12, 1978.8333333333333], [1.62196452E12, 6799.333333333333], [1.6219647E12, 6814.833333333333], [1.62196434E12, 5037.5], [1.62196464E12, 7292.75], [1.62196416E12, 485.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6219647E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 272.72872340425516, "minX": 1.62196416E12, "maxY": 2782.7003961109103, "series": [{"data": [[1.62196446E12, 1883.726223637086], [1.62196428E12, 607.8824817518246], [1.62196458E12, 2387.65335287651], [1.6219644E12, 1604.847068819034], [1.62196422E12, 379.537859007833], [1.62196452E12, 2139.0402735562293], [1.6219647E12, 2782.7003961109103], [1.62196434E12, 1058.797948717949], [1.62196464E12, 2629.988310308182], [1.62196416E12, 272.72872340425516]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6219647E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 272.70212765957444, "minX": 1.62196416E12, "maxY": 2703.9924378826095, "series": [{"data": [[1.62196446E12, 1883.7202546756828], [1.62196428E12, 607.8635036496349], [1.62196458E12, 2387.650787834368], [1.6219644E12, 1604.8415463041645], [1.62196422E12, 379.5143603133159], [1.62196452E12, 2139.036854103346], [1.6219647E12, 2703.9924378826095], [1.62196434E12, 1058.7876923076942], [1.62196464E12, 2629.9819341126477], [1.62196416E12, 272.70212765957444]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6219647E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.019498607242339854, "minX": 1.62196416E12, "maxY": 0.053191489361702135, "series": [{"data": [[1.62196446E12, 0.019498607242339854], [1.62196428E12, 0.019708029197080285], [1.62196458E12, 0.02235251007695126], [1.6219644E12, 0.019541206457094305], [1.62196422E12, 0.03133159268929507], [1.62196452E12, 0.02355623100303952], [1.6219647E12, 0.027727763773856728], [1.62196434E12, 0.023076923076923078], [1.62196464E12, 0.02373361671980167], [1.62196416E12, 0.053191489361702135]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6219647E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 232.0, "minX": 1.62196416E12, "maxY": 3125.0, "series": [{"data": [[1.62196446E12, 2177.0], [1.62196428E12, 807.0], [1.62196458E12, 2613.0], [1.6219644E12, 2096.0], [1.62196422E12, 486.0], [1.62196452E12, 2361.0], [1.6219647E12, 3125.0], [1.62196434E12, 1460.0], [1.62196464E12, 2832.0], [1.62196416E12, 337.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62196446E12, 1989.6], [1.62196428E12, 736.0], [1.62196458E12, 2489.0], [1.6219644E12, 1735.0], [1.62196422E12, 441.0], [1.62196452E12, 2242.0], [1.6219647E12, 2956.0], [1.62196434E12, 1318.0], [1.62196464E12, 2737.6], [1.62196416E12, 294.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62196446E12, 2038.5800000000004], [1.62196428E12, 780.29], [1.62196458E12, 2552.0], [1.6219644E12, 1827.699999999999], [1.62196422E12, 461.6600000000001], [1.62196452E12, 2295.0], [1.6219647E12, 3033.879999999999], [1.62196434E12, 1418.98], [1.62196464E12, 2802.2799999999993], [1.62196416E12, 336.11]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62196446E12, 2006.0], [1.62196428E12, 755.45], [1.62196458E12, 2512.0], [1.6219644E12, 1755.0], [1.62196422E12, 448.0], [1.62196452E12, 2261.35], [1.6219647E12, 2990.0], [1.62196434E12, 1368.0], [1.62196464E12, 2760.0], [1.62196416E12, 298.09999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62196446E12, 1684.0], [1.62196428E12, 444.0], [1.62196458E12, 2186.0], [1.6219644E12, 1272.0], [1.62196422E12, 295.0], [1.62196452E12, 1959.0], [1.6219647E12, 2617.0], [1.62196434E12, 749.0], [1.62196464E12, 2406.0], [1.62196416E12, 232.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62196446E12, 1885.0], [1.62196428E12, 605.0], [1.62196458E12, 2385.0], [1.6219644E12, 1625.0], [1.62196422E12, 379.0], [1.62196452E12, 2140.0], [1.6219647E12, 2856.0], [1.62196434E12, 1041.0], [1.62196464E12, 2629.0], [1.62196416E12, 273.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6219647E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 187.0, "minX": 1.0, "maxY": 3006.0, "series": [{"data": [[2.0, 245.5], [3.0, 250.0], [4.0, 258.0], [5.0, 267.0], [6.0, 276.5], [7.0, 289.0], [8.0, 299.0], [9.0, 311.0], [10.0, 325.5], [11.0, 343.0], [12.0, 353.0], [13.0, 369.5], [14.0, 385.0], [15.0, 389.0], [16.0, 419.0], [17.0, 437.0], [18.0, 460.0], [19.0, 484.0], [20.0, 511.0], [21.0, 535.0], [22.0, 561.5], [23.0, 593.0], [24.0, 630.0], [25.0, 657.0], [26.0, 694.0], [27.0, 734.5], [28.0, 789.5], [29.0, 824.0], [30.0, 883.0], [31.0, 941.0], [32.0, 986.0], [33.0, 1029.0], [34.0, 1094.5], [35.0, 1159.0], [36.0, 1261.0], [37.0, 1430.0], [39.0, 1627.5], [38.0, 1643.5], [40.0, 1694.0], [41.0, 1896.5], [42.0, 1922.0], [43.0, 2029.0], [45.0, 2362.0], [44.0, 2113.0], [46.0, 2474.5], [47.0, 2572.0], [49.0, 2694.5], [48.0, 2630.0], [50.0, 2864.0], [51.0, 2801.0], [52.0, 2975.5], [57.0, 3006.0], [165.0, 2962.0], [1.0, 234.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[165.0, 1462.0], [57.0, 187.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 165.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 3006.0, "series": [{"data": [[2.0, 245.5], [3.0, 250.0], [4.0, 258.0], [5.0, 267.0], [6.0, 276.5], [7.0, 289.0], [8.0, 299.0], [9.0, 311.0], [10.0, 325.5], [11.0, 343.0], [12.0, 353.0], [13.0, 369.5], [14.0, 385.0], [15.0, 389.0], [16.0, 419.0], [17.0, 437.0], [18.0, 460.0], [19.0, 484.0], [20.0, 511.0], [21.0, 535.0], [22.0, 561.5], [23.0, 593.0], [24.0, 630.0], [25.0, 657.0], [26.0, 694.0], [27.0, 734.5], [28.0, 789.5], [29.0, 824.0], [30.0, 883.0], [31.0, 941.0], [32.0, 986.0], [33.0, 1029.0], [34.0, 1094.5], [35.0, 1159.0], [36.0, 1261.0], [37.0, 1430.0], [39.0, 1627.5], [38.0, 1643.5], [40.0, 1694.0], [41.0, 1896.5], [42.0, 1921.5], [43.0, 2029.0], [45.0, 2362.0], [44.0, 2113.0], [46.0, 2474.5], [47.0, 2572.0], [49.0, 2694.5], [48.0, 2630.0], [50.0, 2864.0], [51.0, 2801.0], [52.0, 2975.5], [57.0, 3006.0], [165.0, 2962.0], [1.0, 234.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[165.0, 0.0], [57.0, 187.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 165.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.1333333333333333, "minX": 1.62196416E12, "maxY": 47.3, "series": [{"data": [[1.62196446E12, 42.13333333333333], [1.62196428E12, 22.916666666666668], [1.62196458E12, 45.733333333333334], [1.6219644E12, 39.78333333333333], [1.62196422E12, 12.916666666666666], [1.62196452E12, 44.11666666666667], [1.6219647E12, 44.083333333333336], [1.62196434E12, 32.916666666666664], [1.62196464E12, 47.3], [1.62196416E12, 3.1333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6219647E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.62196416E12, "maxY": 47.05, "series": [{"data": [[1.62196446E12, 41.88333333333333], [1.62196428E12, 22.833333333333332], [1.62196458E12, 45.483333333333334], [1.6219644E12, 39.233333333333334], [1.62196422E12, 12.766666666666667], [1.62196452E12, 43.86666666666667], [1.6219647E12, 43.78333333333333], [1.62196434E12, 32.5], [1.62196464E12, 47.05], [1.62196416E12, 3.1333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6219647E12, 0.18333333333333332]], "isOverall": false, "label": "503", "isController": false}, {"data": [[1.6219647E12, 2.316666666666667]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6219647E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.5, "minX": 1.62196416E12, "maxY": 47.05, "series": [{"data": [[1.62196446E12, 41.88333333333333], [1.62196428E12, 22.833333333333332], [1.62196458E12, 45.483333333333334], [1.6219644E12, 39.233333333333334], [1.62196422E12, 12.766666666666667], [1.62196452E12, 43.86666666666667], [1.6219647E12, 43.78333333333333], [1.62196434E12, 32.5], [1.62196464E12, 47.05], [1.62196416E12, 3.1333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6219647E12, 2.5]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6219647E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.5, "minX": 1.62196416E12, "maxY": 47.05, "series": [{"data": [[1.62196446E12, 41.88333333333333], [1.62196428E12, 22.833333333333332], [1.62196458E12, 45.483333333333334], [1.6219644E12, 39.233333333333334], [1.62196422E12, 12.766666666666667], [1.62196452E12, 43.86666666666667], [1.6219647E12, 43.78333333333333], [1.62196434E12, 32.5], [1.62196464E12, 47.05], [1.62196416E12, 3.1333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6219647E12, 2.5]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6219647E12, "title": "Total Transactions Per Second"}},
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

