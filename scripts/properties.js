const products = [
  {
    crop: "Sweet Corn",
    details:
      "The physical properties of sweet corn seed were determined as a function of moisture content in the range of 11.54–19.74% dry basis (d.b.). The average length, width and thickness were 10.56mm, 7.91mm and 3.45mm, at a moisture content of 11.54% d.b., respectively. In the moisture range from 11.54% to 19.74% d.b., studies on rewetted sweet corn seed showed that the thousand seed mass increased from 131.2 to 145.5g, the projected area from 59.72 to 75.57mm2, the sphericity from 0.615 to 0.635, the true density from 1133.8 to 1225.5kgm−3, the porosity from 57.48% to 61.30% and the terminal velocity from 5.56 to 5.79ms−1. The bulk density decreased from 482.1 to 474.3kgm−3 with an increase in the moisture content range of 11.54–19.74% d.b. The static coefficient of friction of sweet corn seed increased the linearly against surfaces of four structural materials, namely, rubber (0.402–0.494), aluminium (0.321–0.441), stainless steel (0.267–0.401) and galvanised iron (0.364–0.477) as the moisture content increased from 11.54% to 19.74% d.b. Keywords: Sweet corn seed; Physical properties; Moisture content",
    Moisture_range: "11.54–19.74% (d.b.)",
    length: "10.56mm",
    width: "7.91mm",
    thickness: "3.45mm",
    ThousandSeedMass: "131.2 to 145.5g",
    Area: "59.72 to 75.57mm2",
    Sphericity: "0.615 to 0.635",
    True_density: "1133.8 to 1225.5kgm−3",
    Porosity: "57.48% to 61.30%",
    Terminal_velocity: "5.56 to 5.79ms−1",
    Bulk_density: "482.1 to 474.3kgm−3",
    Static_K_of_friction:
      "rubber(0.402–0.494), Al(0.321–0.441), stainless-steel(0.267–0.401) galvanised-iron 0.364–0.477)",
    ref: "Bülent Coşkun, İbrahim Yalçın, Cengiz Özarslan, Physical properties of sweet corn seed (Zea mays saccharata Sturt.), Journal of Food Engineering, Volume 74, Issue 4, 2006, Pages 523-528, ISSN 0260-8774",
    img: "assets/corn.jpg",
    link: "https://doi.org/10.1016/j.jfoodeng.2005.03.039",
    link2:
      "https://www.sciencedirect.com/science/article/pii/S0260877405001925",
  },
  {
    crop: "gram",
    details:
      "The dependence of physical properties of gram on moisture content was determined. The best approximate shape was found to be a prolate spheroid. At 10·9% moisture content d.b., the measurements yielded an average 1000 grain weight of 0·173 kg, a mean surface area of 133·4 mm2, and sphericity and roundness of 74% and 70% respectively. In the moisture range from 9·64 to 31·0% d.b., studies on rewetted gram showed that the bulk density changed from 780 to 708 kg/m3, kernel density from 1311 to 1257 kg/m3; porosity from 40·5 to 43·7% and static coefficient of friction from 0·384 to 0·651 over surfaces of different materials. The angle of repose was observed to change from 25·5° to 30·4° in the moisture range from 8·62 to 17·6% d.b.",
    shape: "prolate spheroid",
    moistureRange: "10.9% to 31.0% d.b",
    ThousandSeedMass: "0.173kg",
    surfaceArea: "133.4mm2",
    sphericity: "74%",
    roundness: "70%",
    bulkDensity: "780 to 708 kg/m3",
    kernelDensity: "1311 to 1257 kg/m3",
    porosity: "40.5 to 43.7%",
    staticKOfFriction: "0.384 to 0.651",
    angleOfRepose: "25.5° to 30.4°",
    img: "assets/grahm.jpg",
    ref: "S.K. Dutta, V.K. Nema, R.K. Bhardwaj, Physical properties of gram, Journal of Agricultural Engineering Research, Volume 39, Issue 4, 1988, Pages 259-268, ISSN 0021-8634",
    link: "https://doi.org/10.1016/0021-8634(88)90147-3",
    link2: "https://www.sciencedirect.com/science/article/pii/0021863488901473",
  },
  {
    crop: "Cumin Seed",
    details:
      "The physical properties of cumin seed were evaluated as a function of moisture content. The average length, breadth and thickness were 5·61, 1·77 and 1·55 mm respectively. In the moisture range from 7 to 22% d.b., studies on dried or rewetted cumin seed showed that bulk density initially increased from 477 to 502 kg/m3then decreased from 502 to 410 kg/m3, true density increased from 1047 to 1134 kg/m3, and porosity increased from 54 to 64%. The 1000 seed weight and terminal velocity increased linearly from 4·13 to 4·80 g and 2·6 to 4·8 m/s respectively. The angle of repose increased linearly from 36·5 to 51·3 ° and the static coefficient of friction also increased linearly on four metal surfaces, namely, mild steel (0·54 to 0·70), galvanized iron (0·48 to 0·65), stainless steel (0·37 to 0·62) and aluminium (0·43 to 0·63) with the increase in moisture content from 7 to 22% d.b.",
    img: "assets/cumin.jpg",
    length: "5.61mm",
    width: "1.77m",
    thickness: "1.55",
    moistureRange: "7% to 22% d.b",
    bulkDensity: "477 to 502 kg/m3 then to 410kg/m3",
    trueDensity: "1047 to 1134 kg/m3",
    porosity: "54% to 64%",
    ThousandSeedMass: "4.13g to 4.80g",
    TerminalVelocity: "2.6 to 4.8 m/s",
    angleOfRepose: "36.5° to 51.3°",
    staticKOfFriction:
      "M-steel(0.54-0.70), Galv-iron(0.48-0.65), S-steel(0.37-0.62), Al(0.43-0.63)",
    ref: `K.K. Singh, T.K. Goswami, Physical Properties of Cumin Seed, Journal of Agricultural Engineering Research, Volume 64, Issue 2, 1996, Pages 93-98, ISSN 0021-8634 `,
    link: " https://doi.org/10.1006/jaer.1996.0049",
    link2:
      "https://www.sciencedirect.com/science/article/pii/S0021863496900499",
  },
  {
    crop: "Soybean",
    details:
      "The dependence of physical properties of soybean on moisture content was determined. In the moisture range 8·7 to 25·0% d.b., the length of grain increased from 6·32 to 6·75 mm, the width from 5·23 to 5·55 mm, the thickness from 3·99 to 4·45 mm, the geometric mean diameter from 5·09 to 5·51 mm, the sphericity from 0·806 to 0·816, the surface area from 0·813 to 0·952 cm2, the volume of grain from 0·091 to 0·113 cm3 and thousand grain mass from 0·110 to 0·127 kg. Kernel density decreased from 1216 to 1124 kg/m3, bulk density from 735 to 708 kg/m3 and porosity from 0·40 to 0·37.",
    moistureRange: "8.7% to 25.0% db",
    length: "6.32mm to 6.75mm",
    width: "5.23mm to 5.55mm",
    thickness: "3.99mm to 4.45mm",
    diameter: "5.09mm to 5.51mm",
    sphericity: "0.806 to 0.816",
    Surface_Area: "0.813 to 0.95 cm2",
    volume: "0.091 to 0.113cm3",
    ThousandSeedMass: "0.110kg to 0.127kg",
    kernelDensity: "1216 to 1124 kg/m3",
    bulkDensity: "735 to 708 kg/m3",
    porosity: "0.40 to 0.37",
    img: "assets/soybean.jpg",
    ref: `S.D. Deshpande, S. Bal, T.P. Ojha, Physical Properties of Soybean, Journal of Agricultural Engineering Research, Volume 56, Issue 2, 1993, Pages 89-98, ISSN 0021-8634`,
    link: "https://doi.org/10.1006/jaer.1993.1063",
    link2:
      "https://www.sciencedirect.com/science/article/pii/S0021863483710632",
  },
  {
    crop: "Barbunia bean seed",
    details:
      "The physical properties of barbunia bean seed were determined as a function of moisture content in the range of 18.33–32.43% dry basis (d.b.). The average length, width and thickness were 16.68 mm, 9.36 mm and 7.51 mm, at a moisture content of 18.33% d.b., respectively. In the moisture range from 18.33% to 32.43% d.b., studies on rewetted barbunia bean seed showed that the thousand seed mass increased from 751.77 to 859.63 g, the projected area from 73.85 to 97.35 mm2, the sphericity from 0.632 to 0.644, the porosity from 47.85% to 48.56% and the terminal velocity from 14.23 to 16.63 m s−1. The bulk density decreased from 639.24 to 579.29 kg m−3 and the true density from 1225.68 to 1126.15 kg m−3 with an increase in the moisture content range of 18.33–32.43% d.b. The static coefficient of friction of barbunia bean seed increased the linearly against surfaces of four structural materials, namely, rubber (0.213–0.271), aluminium (0.161–0.222), stainless steel (0.147–0.207) and galvanised iron (0.169–0.246) as the moisture content increased from 18.33% to 32.43% d.b.",
    moistureRange: "18.33 to 32.43% d.b",
    length: "16.68mm",
    width: "9.36",
    thickness: "7.51",
    ThousandSeedMass: "751.77 to 859.63g",
    surfaceArea: "73.85 to 97.35 mm2",
    sphericity: "0.632 to 0.644",
    porosity: "47.85% to 48.56",
    TerminalVelocity: "14.23 to 16.63 m/s",
    bulkDensity: "639.24 to 579.29 kg/m3",
    trueDensity: "1225.68 to 1126.15 kg/m3",
    staticKOfFriction:
      "rubber(0.213–0.271), Al(0.161–0.222), s-steel(0.147–0.207). G-iron(0.169–0.246)",
    img: "assets/barbounia-beans.jpg",
    ref: `Mustafa Cetin, Physical properties of barbunia bean (Phaseolus vulgaris L. cv. ‘Barbunia’) seed, Journal of Food Engineering, Volume 80, Issue 1, 2007, Pages 353-358, ISSN 0260-8774, Keywords: Barbunia bean seed; Physical properties; Moisture content`,
    link: "https://doi.org/10.1016/j.jfoodeng.2006.06.004",
    link2:
      "https://www.sciencedirect.com/science/article/pii/S0260877406004493",
  },
  {
    crop: "Sunflower seeds ",
    details:
      "Physical dproperties of sunflower seeds and kernels were evaluated as a function of moisture content. At 6·2% m.c.d.b., the average length, width, thickness and unit mass of the seed were 9·52 mm, 5·12 mm, 3·27 mm and 0·049 g respectively. Corresponding values for the kernel were 8·28 mm, 4·09 mm, 2·43 mm and 0·034 g. The mean equivalent diameter and sphericity of the seed were 5·39 mm and 0·57 respectively, while corresponding values for the kernel were 4·32 mm and 0·53. In the moisture range from 4-20% d.b., the bulk density of the rewetted seed decreased from 462 to 434 kg/m3, true density increased from 706 to 765 kg/m3, porosity increased from 34·3 to 43·3% and terminal velocity increased from 5·8 to 7·6 m /s. For the kernel the corresponding values changed from 574 to 628 kg/m3, 1050 to 1250 kg/m3, 45·4 to 50·2% and 3·5-5·8  m/s. In the same moisture range the static coefficient of friction varied from 0·40 to 0·58 for seed and from 0·43 to 0·81 for kernel on different surfaces, while the angle of respose varied from 34 to 41° for seed and 27 to 38° for kernel.",
    moistureContent: "6.2% d.b",
    length: "9.5mm",
    width: "4.09mm",
    thickness: "2.43mm",
    unitMass: "0.034g",
    kernel_length: "8.28mm",
    kernel_width: "5.12mm",
    kernel_thickness: "3.27mm",
    kernel_unitMass: "0.049g",
    diameter: "5.59mm",
    sphericity: "0.57",
    kernel_diameter: "4.32mm",
    kernel_sphericity: "0.53",
    moistureRange: "4 to 20% d.b",
    bulkDensity: "462 to 434 kg/m3",
    trueDensity: "706 to 765 kg/m3",
    porosity: "34.3 to 43.3%",
    TerminalVelocity: "5.8 to 7.6 m/s",
    kernel_bulkDensity: "578 to 628 kg/m3",
    kernel_trueDensity: "1050 to 1250 kg/m3",
    kernel_porosity: "45.4 to 50.2%",
    kernel_TerminalVelocity: "3.5 to 5.8  m/s",
    staticKOfFriction: "0.40 to 0.58",
    kernel_staticKOfFriction: "0.43 to 0.81",
    angleOfRepose: "34° to 41°",
    kernel_angleOfRepose: "27° to 38°",
    img: "assets/sunflower-seeds.jpg",
    ref: `R.K. Gupta, S.K. Das, Physical Properties of Sunflower Seeds, Journal of Agricultural Engineering Research, Volume 66, Issue 1, 1997, Pages 1-8, ISSN 0021-8634`,
    link: "https://doi.org/10.1006/jaer.1996.0111",
    link2:
      "https://www.sciencedirect.com/science/article/pii/S0021863496901110",
  },
  {
    crop: "Millet",
    details:
      "Physical and mechanical properties of millet and other grains and seeds are necessary for the design of equipment to handle, transport, process and store the crop. The physical properties of millet have been evaluated as a function of grain moisture content varying from 5% to 22.5% (db). In this moisture range, grain length, width, thickness and geometric diameter increased from 3.522 to 4.163 mm, 2.735 to 3.211 mm, 2.180 to 2.788 mm, and 2.759 to 3.340 mm, respectively; the grain surface area, volume and sphericity increased from 23.91 to 35.05mm2, 8.2 to 14.65mm3 and 0.783 to 0.803, respectively; the 1000 seed mass, true density, angle of repose and terminal velocity increased from 14 to 44 gm, 1550 to 1712kg/m3, 34.5° to 48.5° and 2.75 to 4.63 m/s, respectively. The sphericity increased slowly with moisture content up to 18% and increased rapidly after that. The coefficient of static friction increased from 0.42 to 0.79, 0.39 to 0.75 and 0.36 to 0.69 for plywood, mild steel and galvanised iron, respectively. Bulk density increased with grain moisture content up to 10% and decreased with moisture content thereafter, while porosity decreased with moisture content up to 7.5% and increased with moisture content thereafter.",
    moistureRange: "5% to 22.5% db",
    length: "3.52mm to 1.163mm",
    width: "2.735mm to 3.211mm",
    thickness: "2.180mm to 2.788mm",
    diameter: "2.759mm to 3.340mm",
    surfaceArea: "23.91 to 35.05 mm2",
    volume: "8.2 to 14.65 mm3",
    sphericity: "0.783 to 0.803",
    ThousandSeedMass: "14 to 44 g",
    trueDensity: "1550 to 1712 kg/m3",
    angleOfRepose: "34.5° to 48.5°",
    TerminalVelocity: "2.75 to 4.63 m/s",
    sphericity: "18%",
    staticKOfFriction:
      "P-wood(0.42 to 0.79), M-steel(0.39 to 0.75), G-iron(0.36 to 0.69) ",
    bulkDensity: "10%",
    porosity: "7.5%",
    img: "assets/millet.jpg",
    ref: "Edward A. Baryeh, Physical properties of millet, Journal of Food Engineering, Volume 51, Issue 1, 2002, Pages 39-46,ISSN 0260-8774",
    link: "https://doi.org/10.1016/S0260-8774(01)00035-8",
    link2:
      "https://www.sciencedirect.com/science/article/pii/S0260877401000358",
  },
  {
    crop: "African pear",
    details:
      "The study was conducted to investigate the physical properties of arigo seeds, namely linear dimensions, mean diameters, sphericity, surface area, volume, true and bulk densities, porosity, angle of repose and static coefficient of friction at 10.3% w.b. moisture content. The results revealed that the mean length, width and thickness of arigo seeds were 19.0, 12.16, 10.1 mm,respectively. The arithmetic and geometric mean diameters were 13.7 and 13.2 mm, respectively. The sphericity, surface area and 1000 grain mass of arigo seed were 0.8, 501.3 mm2 and 1124.7 g, respectively. True and bulk densities were 1066.7 and 989.78. kg m-3, respectively. The static coefficient of friction on concrete and glass structural surfaces were observed to be the highest and lowest, respectivel",
    moistureContent: "10.3% w.b",
    length: "19.0mm",
    width: "12.16mm",
    thickness: "10.1mm",
    A_M_Diameter: "13.7mm",
    G_M_diameter: "13.2mm",
    surfaceArea: "501.3mm2",
    volume: "422.2 mm3",
    sphericity: "0.8",
    ThousandSeedMass: "1124.7g",
    trueDensity: "1066.7 kg/m3",
    angleOfRepose: "24.5°",
    bulkDensity: "989.78 kg/m3",
    sphericity: "18%",
    porosity: "31.07%",
    staticKOfFriction:
      "highest on concrete surface and lowest on glass surfaces",
    img: "assets/arigo.jpg",
    ref: "R.M. Davies, Some physical properties of arigo seeds, Department of Agricultural and Environmental Engineering, Niger Delta University, Wilberforce Island, Bayelsa State, Nigeria, 2009",
  },

  {
    crop: `Cowpea`,
    details: `The physical properties of cowpea seed were evaluated as a function of moisture content. The average length, width and thickness were 9.92 mm, 6.87 mm and 6.06 mm, respectively, at 12.01% d.b. moisture content. In the moisture range from 12.01% to 38.90% dry basis (d.b.), studies on rewetted cowpea seed showed that 1000 seed mass increased from 209.23 g to 256.88 g, the projected area from 22.59 to 32.72 mm2, the sphericity from 0.781 to 0.799, the porosity from 50.64% to 51.49% and the terminal velocity from 9.31 m s−1 to 9.61 m s−1. The static coefficient of friction of cowpea seed increased the linearly against surfaces of four structural materials, namely, rubber (0.364–0.394), aluminium (0.212–0.296), stainless steel (0.176–0.238) and galvanised iron (0.324–0.36) as the moisture content increased from 12.01% to 38.90% d.b. The bulk density decreased from 569.9 to 535.6 kg m−3 and the true density from 1154.8 to 1104.1 kg m−3, respectively, with an increase in moisture content from 12.01% to 39.90% d.b.`,
    length: "9.92mm",
    width: "6.87mm",
    thickness: "6.06mm",
    moistureContent: "12.08% db",
    moistureRange: "12.01% to 38.90% (d.b.)",
    ThousandSeedMass: "209.23 g to 256.88 g",
    Projected_Area: "22.59 to 32.72 mm2",
    Sphericity: "0.781 to 0.799",
    Porosity: "50.64% to 51.49%",
    Terminal_Velocity: "9.31m/s to 9.61m/s",
    Bulk_density: "569.9 to 535.6 kgm−3",
    True_density: "1154.8 to 1104.1 kg m−3",
    StaticKofFriction:
      "rubber(0.364–0.394), Al(0.212–0.296), stainless-steel(0.176–0.238)galvanised-iron(0.324–0.36)",
    ref: ` İbrahim Yalçın,Physical properties of cowpea (Vigna sinensis L.) seed, Journal of Food Engineering, Volume 79, Issue 1,2007,Pages 57-62,ISSN 0260-8774,`,
    link: "https://doi.org/10.1016/j.jfoodeng.2006.01.026",
    link2:
      "(https://www.sciencedirect.com/science/article/pii/S0260877406000732)",
    img: "assets/cowpea.jpg",
  },
  {
    crop: "Wheat",
    details: `Physical properties often required for designing the equipments for planting, harvesting and post-harvesting operations of seeds. Several physical properties of three popular wheat varieties (Shiraz, Karoun and Shiroudy) were determined and compared for moisture content in 8, 12 and 18% w.b in 2007 in University of Tehran. The average length, width and thickness were 6.75, 3.26 and 2.77 mm at a moisture content of 8% w.b., respectively. studies on rewetted wheat seeds showed that the thousand-kernel weight increased from 18.38 to 22.43g. The geometric and equivalent mean diameter, surface area, sphericity and aspect ratio at a moisture content of 8% w.b were 3.93, 3.94 mm, 48.68 mm , 0.58, 0.48, respectively. The 2 porosity increased from 0.43 to 0.45 %. Whereas the bulk density decreased from 0.72 to 0.66kg m and the -3 true density from 1.25 to 1.19 kg m , with an increasing in the moisture content range of 8B18% w.b. The -3 static and dynamic angle of repose varied from 37.28 to 47.33 and 29.89 to 36.5. The mean of static friction o coefficient of three wheat varieties increased the linearly against surfaces of three structural materials, namely, compressed plastic (0.43 - 0.53), galvanized iron (0.33 - 0.53) and plywood (0.35 - 0.41) as the moisture content increased from 8 to 18% w.b.`,
    moistureRange: "8, to 18% w.b",
    length: "6.75mm",
    width: "3.26mm",
    porosity: "0.43 to 0.45%",
    bulkDensity: "0.72 to 0.66kgm",
    True_density: "1.25 to 1.19 kg m",
    Static_angle_of_repose: "37.28 to 47.33",
    Dynamic_angle_of_repose: "29.89 to 36.5",
    staticKOfFriction:
      "plastic (0.43 - 0.53), galvanized-iron(0.33 - 0.53) plywood(0.35 - 0.41)",
    ref: `M. Karimi, K. Kheiralipour, A. Tabatabaeefar, G.M. Khoubakht, M. Naderi and K. Heidarbeigi,The Effect of Moisture Content on Physical Properties of Wheat, Department of Agricultural Machinery Engineering, Faculty of Biosystem Engineering, University of Tehran, Karaj, Iran.`,
    link: "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.498.1190&rep=rep1&type=pdf",
    img: "assets/wheat-grains.jpg",
  },
  {
    crop: "Bambara Nut",
    details: `The physical properties of bambara groundnut and other grains and seeds are necessary for the design of equipment to handle, transport, process and store the crop. The physical properties of bambara groundnut have been evaluated as a function of grain moisture content varying from 5% to 35% (wb). In this moisture range, grain length, width, thickness and geometric diameter increased from 10.5 to 14.65 mm, 9.48 to 11.65 mm, 8.50 to 10.90 mm and 9.65 to 12.55 mm respectively; the grain surface area and volume increased from 304 to 495 mm2 and from 425 to 900 mm3, respectively; the sphericity decreased from 0.90 to 0.87; the 1000-seed mass increased from 500.2 to 800.6 g; true and bulk densities decreased from 1.285 to 1.160 g/cm3 and from 0.795 to 0.696 g/cm3, respectively; the porosity and angle of repose increased with increase in moisture content up to 43.8% and 23.5°, respectively, at 20% moisture content; the sphericity decreased from 0.895 at 5% moisture content to 0.820 at 35% moisture content. The coefficient of static friction increased from 0.39 to 0.66, 0.29 to 0.58 and 0.25 to 0.49 for plywood, galvanised iron and aluminium, respectively.`,
    moistureRange: "5% to 35% (wb)",
    length: "10.5 to 14.65 mm",
    width: "9.48 to 11.65 mm",
    thickness: "8.50 to 10.90 mm",
    Geometric_diameter: "9.65 to 12.55 mm",
    surface_area: "304 to 495 mm2",
    volume: "425 to 900 mm3",
    sphericity: "0.90 to 0.87",
    ThousandSeedMass: "500.2 to 800.6 g",
    trueDensity: "1.285 to 1.160 g/cm3",
    Bulk_density: "  0.795 to 0.696 g/cm3",
    porosity: "43.8%",
    angleOfRepose: "23.5°",
    static_K_OfFriction:
      "0.39 to 0.66(plywood), 0.29 to 0.58(galvanised iron)  0.25 to 0.49(Al)",
    ref: `Edward A Baryeh, Physical properties of bambara groundnuts, Journal of Food Engineering, Volume 47, Issue 4, 2001, Pages 321-326,ISSN 0260-8774,`,
    link: "https://doi.org/10.1016/S0260-8774(00)00136-9",
    link2:
      "https://www.sciencedirect.com/science/article/pii/S0260877400001369",
    img: "assets/bambara.jpg",
  },
  {
    crop: "Groundnut",
    details: `Investigation of physical and mechanical properties of groundnut is essentialfor design of equipmentfor harvesting, processing, transportation, cleaning, sorting, separation and packaging. In this research somephysical properties of groundnut grains were evaluated such as axial dimensions, geometric mean diameter,thousand grain mass, true and bulk density and grain volume at moisture content 7.6% dry basis. The sphericity, aspect ratio, surface area and porosity were 0.69, 56%, 120.82mm2, 36.4% respectively. Static coefficient of friction for glass, plywood, galvanized steel and concrete structural surfaces were 0.11, 0.13, 0.14 and 0.16,respectively and angle of repose 28/.`,
    sphericity: "0.69",
    aspect_ratio: "56%",
    surface_area: "120.82mm2",
    porosity: "36.4%",
    Length: "14.21mm",
    Width: "7.94mm",
    Thickness: "7.57mm",
    Thousand_grain_Mass: "380.50g",
    Arithmetic_mean_diameter: "9.91mm",
    Geometric_mean_diameter: "9.49mm",
    True_density: "752.34kgm-3",
    Bulk_density: "479.28kgm-3",
    angleOfRepose: "28°",
    Static_K_of_friction:
      "glass(0.11), plywood(0.13), galvanized-steel(0.14) concrete(0.16)",
    ref: "R.M. Davies, Some Physical Properties of Groundnut Grains, Department of Agricultural and Environmental Engineering, Niger Delta University, Wilberforce Island. Bayelsa State.",
    img: "assets/groundnut.jpg",
  },
  {
    crop: "Rice",
    details: `Physical and mechanical properties of rice are necessary for the design of equipment to handle, transport, process and store the crop. These properties were evaluated as a function of moisture content of grain. The objective of this work was to determine the physical and mechanical properties of rice. The grain was tested for bulk density, true density, sphericity, porosity, angle of internal friction and coefficient of friction with various materials at 12% moisture content (dry basis, db). The average length, width, thickness and the average thousand grain weight of the rye grains were, 7.43mm, 2.75mm, 2.53mm and 26.91 g. The static coefficient of friction 0.4835, 0.4061, and 0.3670 for wood, galvanized iron and glass surfaces respectively. The higher friction coefficient values were observed on wood surface and the lowest on steel surface.`,
    moistureContent: "12% d.b",
    Length: "7.43mm",
    Width: "2.53mm",
    Thickness: "2.75mm",
    Equivalent_diameter: "3.48",
    Sphericity: "0.435",
    Thousand_grain_Mass: "28g",
    Porosity: "46%",
    Bulk_density: "541kg m−3",
    True_density: "1108.98kg m−3",
    Angle_of_repose: "34°",
    ref: `
    Mohammad Jouki* and Naimeh Khazaei,
    Some Physical Properties of Rice Seed (Oriza Sativa),
    Young Researcher Club- Islamic Azad University- Shahr-e-qods Branch, I R, IRAN
    `,
    img: "assets/rice.jpg",
  },
  {
    crop: "Sorghum",
    details: `Some physical properties of Samaru Sorghum 17(SAMSORG 17) were determined within the moisture range of 8.89 -16.5% wb being the moisture range for threshing and storage of sorghum. The diameter, one thousand weight and sphericity of the grain and and the sorghum grain mass, projected area, volume, particle density, and bulk density were the physical parameters measured. Results of the investigations showed that the average diameter of sorghum grain calculated by arithmetic mean, geometric mean and equivalent diameter methods were 3.32 mm and 3.31 mm, 3.31 mm and 4.20 mm, 4.16 mm and 4.18 mm at 8.89 % wb and 16.50 % wb respectively. The mean mass, projected area, volume, particle density and bulk density for sorghum grain were 0.044 g, 4.66 mm2 , 0.091 cm3 , 1.02 g/cm3 and 568.5 g/cm3 at 8.89 % wb respectively. The sphericity of sorghum grain was normally distributed about 0.92. The sorghum grain particle density decreased with increasing moisture content within the moisture range considered. Keywords: Mass, particle density, projected area, diameter, sphericity, volume, bulk density`,
    moisture_range: "8.89 to 16.50 % wb",
    Arithmetic_mean_diameter: "3.32mm to 3.31 mm",
    Geometric_diameter: "3.31 mm to 4.20 mm",
    Equivalent_diameter: "4.16 mm to 4.18 mm",
    mass: "0.044g",
    projected_area: "4.66 mm2 ",
    volume: "0.091 cm3",
    particle_density: "1.02 g/cm3",
    bulk_density: "568.5 g/cm3",
    moistureContent: "8.89 % wb",
    Sphericity: "0.92",
    ref: "K J Simonyan, A M El-Okene and Y D Yiljep “Some Physical Properties of Samaru Sorghum 17” Agricultural Engineering International: the CIGR Ejournal Manuscript FP 07 008. Vol. IX. August, 2007. ",
    img: "assets/sorghums.jpg",
  },
  {
    crop: "Cocoa Beans",
    details:
      "Physical properties of Category B cocoa beans from the 2000/2001 harvesting season were determined as a function of bean moisture content in the moisture range between 5% and 24% (wb). In the above moisture range, the mean bean length, width and thickness increased from 22.41 to 22.5 mm, 12.2 to 12.86 mm and 7.36 to 7.70 mm respectively. At the moisture content of 8.6% (wb), 87% of the beans had lengths between 20.0 and 26.0 mm, 87% had their width between 10.0 and 14.0 mm and 95% had their thickness between 6.0 and 10.0 mm. The sphericity varied from 0.57 at 8.6% (wb) moisture content to 0.58 at 24.0% (wb) moisture content. The mean bean mass ranged between 1.11 and 1.31 g with 77% of the beans ranging between 1.13 and 1.53 g at 8.6% (wb). The 1000-bean mass and the percentage shell mass increased from 1125 to 1247 g and from 10.7% to 19.6% respectively. The particle density and porosity increased from 946 to 991 kg/m3 and 20.58 to 31.59% respectively while the bulk density decreased from 560 to 505 kg/m3. The filling and emptying angles of repose increased with increase in moisture content from 23.7° to 33.8° and 27.3° to 37.5° respectively. The coefficient of static friction of the beans increased from 0.20 to 0.25, 0.45 to 0.60 and 0.53 to 0.7 for rubber, galvanised steel and plywood respectively.",
    moistureRange: "5% to 24% (wb)",
    length: "22.41 to 22.5 mm",
    width: "12.2 to 12.86 mm",
    thickness: "7.36 to 7.70 mm",
    Sphericity: "0.57 to 0.58",
    mass: "1.11 and 1.31 g",
    Thousand_grain_Mass: "1125 to 1247 g",
    percent_shell_mass: "10.7% to 19.6%",
    particle_density: "946 to 991 kg/m3",
    porosity: "20.58 to 31.59%",
    bulk_density: "560 to 505 kg/m3",
    Angle_of_repose: "filling(23.7° to 33.8°), emptying(27.3° to 37.5°)",
    static_K_OfFriction:
      "rubber(0.20 to 0.25), galvanised steel(0.45 to 0.60) plywood(0.53 to 0.7)",
    ref: "Ato Bart-Plange, Edward A. Baryeh, The physical properties of Category B cocoa beans, Journal of Food Engineering, Volume 60, Issue 3,2003,Pages 219-227,ISSN 0260-8774",
    link: "https://doi.org/10.1016/S0260-8774(02)00452-1",
    link2:
      "https://www.sciencedirect.com/science/article/pii/S0260877402004521",
    img: "assets/cocoabeans.jpg",
  },
  {
    crop: "Kidney Beans",
    details:
      "The research work was conducted on the physical properties of three species of kidney bean (White speckled kidney bean, Red small kidney bean and Black kidney bean). Length, width, thickness varied between 1.04-1.7, 0.66-0.79, 0.49-0.58 cm for three species of kidney bean, respectively. Arithmetic mean diameter, geometric mean diameter, square mean diameter and equivalent diameter were 0.73-1.00, 0.70-0.96, 1.23-1.62, and 0.88-1.19 cm2, respectively. Sphericity and aspect ratio ranged between 0.56-0.67 and 0.45-0.64 for kidney bean, respectively. Porosity (%) as a function of bulk density and true density were 2.21-9.07(%), respectively. Volume, surface area and shape factor varied between 0.20-0.58, 1.53-3.47 and 0.88-1.015 cm, respectively. Thousand kernel mass (M1000) were lowest for red small kidney bean (240 g) and highest for black kidney bean (499 g). The angle of repose of three varieties of kidney bean ranged between 21.74 to 23.79°.",
    Length: "1.04 - 1.7cm",
    width: "0.66 - 0.79cm",
    thickness: "0.49 - 0.5cm",
    Arithmetic_mean_diameter: " cm2",
    Geometric_mean_diameter: "0.70-0.96cm2",
    square_mean_diameter: "1.23-1.62cm2",
    equivalent_diameter: "0.88-1.19 cm2",
    Sphericity: "0.56-0.67",
    aspect_ratio: "0.45-0.64",
    Porosity: " 2.21-9.07%",
    Volume: "0.20-0.58 cm",
    surface_area: "1.53-3.47 cm",
    shape_factor: "0.88-1.015 cm",
    Thousand_kernel_mass:
      "red small kidney bean (240 g), black kidney bean (499 g)",
    Angle_of_repose: "21.74 to 23.79°",
    ref: "Yogendra Singh, Suresh Chandra, Department of Agricultural Engineering and Food Technology, S.V. Patel University of Agriculture and Technology, Meerut (U.P.), India.",
    link: "https://www.cabdirect.org/cabdirect/abstract/20153041922",
    img: "assets/kidneybeans.jpg",
  },
  {
    crop: "Barley",
    details:
      "Designing equipment for processing, sorting, sizing and other post-harvest operations of agricultural products requires information about their physical properties. This study was carried out to evaluate the effect of moisture content on some physical properties of barley grains. Four levels of moisture content ranging from 7.34% to 21.58% (d.b.) were used. The average length, width, thickness, arithmetic mean diameter, geometric mean diameter, thousand grain mass, sphericity, surface area and repose angle increased from 8.91 to 9.64 mm, 3.30 to 3.74 mm, 2.58 to 2.98 mm, 4.93 to 5.45 mm, 4.23 to 4.75 mm, 44.48 to 51.30 g, 47.55% to 49.35%, 56.66 to 71.09 mm2 and 31.16° to 36.90°, respectively, as moisture content increased from 7.34% to 21.58% (d.b.). The bulk density, true density and porosity were found to decrease with increasing moisture content. The static friction coefficient of the grains increased linearly against various surfaces (plywood, glass and galvanized iron sheet) as the moisture content increased. At all moisture content, the maximum friction was offered by plywood, followed by galvanized iron sheet and glass surface.",
    length: "8.91 to 9.64 mm",
    width: "3.30 to 3.74 mm",
    thickness: "2.58 to 2.98 mm",
    arithmetic_mean_diameter: "4.93 to 5.45 mm",
    geometric_mean_diameter: "4.23 to 4.75 mm",
    thousand_grain_mass: "44.48 to 51.30 g",
    sphericity: "47.55% to 49.35%",
    surface_area: "56.66 to 71.09mm2",
    Angle_of_repose: "31.16° to 36.90°",
    moisture_range: "7.34% to 21.58% (d.b.)",
    ref: "Mahmoud Tavakoli, Hamed Tavakoli, Ali Rajabipour, Hojat Ahmadi, Seyed Mohammad Taghi Gharib-Zahedi.  Moisture-dependent physical properties of barley grains.  Int J Agric & Biol Eng, 2009; 2(4): 84",
    link: "http://mail.ijabe.org/index.php/ijabe/article/view/161",
    img: "assets/barley.jpg",
  },
  {
    crop: "Fenugreek",
    details:
      "Some physical properties of fenugreek seeds were evaluated as a function of moisture content. The average length, width, thickness, geometric mean diameter and unit mass of the seed ranged from 4.01 to 4.19 mm, 2.35 to 2.61 mm, 1.49 to 1.74 mm, 2.40 to 2.66 mm and 0.0157 to 0.0164 g as the moisture content increased from 8.9% to 20.1% d.b. respectively. In the moisture content range, studies on rewetted fenugreek seed showed that the sphericity increased from 60.79% to 64.06%, the seed volume from 12.58 to 13.83 mm3, 1000 seed mass from 15.48 to 16.39 g and surface area from 18.09 to 22.18 mm2. As the moisture content increased from 8.9% to 20.1% d.b., the bulk density, kernel density were found to decrease from 701.16 to 645.81 kg/m3 and 1240.36 to 1165.25 kg/m3, whereas angle of repose and porosity were found to increase from 14.34° to 16.88° and 43.47% to 44.58%, respectively. The static and dynamic coefficients of friction on various surfaces, namely, plywood, mild steel and galvanized metal also increased linearly with increase in moisture content. The plywood surface offered the maximum friction followed by mild metal and galvanized metal.",
    length: "4.01 to 4.19mm",
    width: "2.35 to 2.61mm",
    thickness: "1.49 to 1.74mm",
    geometric_mean_diameter: "2.40 to 2.66mm",
    unit_mass: "0.0157 to 0.0164g",
    moisture_range: "8.9% to 20.1% d.b",
    sphericity: "60.79% to 64.06%",
    volume: "12.58 to 13.83 mm3",
    thousand_seed_mass: "15.48 to 16.39g",
    surface_area: "18.09 to 22.18mm2",
    bulk_density: "701.16 to 645.81 kg/m3",
    kernel_density: "1240.36 to 1165.25 kg/m3",
    angle_of_repose: "14.34° to 16.88°",
    porosity: " 43.47% to 44.58%",
    ref: `Ebubekir Altuntaş, Engin Özgöz, Ö. Faruk Taşer,Somephysical properties of fenugreek (Trigonella foenum-graceum L.) seeds,Journal of Food Engineering,Volume 71, Issue 1, 2005, Pages 37-43,ISSN 0260-8774,`,
    link: "https://doi.org/10.1016/j.jfoodeng.2004.10.015",
    link2:
      "https://www.sciencedirect.com/science/article/pii/S0260877404005126",
    img: "assets/fenugreek.jpg",
  },
  {
    crop: "Lupin",
    details:
      "The dependence of physical properties of white lupin on moisture content was determined. The average length, width and thickness of grains ranged from 9·85 to 10·52, 9·15 to 9·63 and 4·94 to 5·51 mm as the moisture content increased from 8·3 to 19·2% d.b., respectively. Over the same range, the volume of a grain increased from 0·35 to 0·43 cm3, 1000 grain mass from 0·351 to 0·452 kg, porosity from 0·115 to 0·304 and projected area from 1·11 to 1·53 cm2. The bulk density decreased from 868 to 768 kg/m3but kernel density increased from 980 to 1103 kg/m3. Both the static and dynamic coefficients of friction against galvanized steel and rubber increased with increasing moisture content.",
    length: "9·85 to 10·52mm",
    width: "9·15 to 9·63mm",
    thickness: "4·94 to 5·51mm",
    moisture_range: "8·3 to 19·2% d.b.",
    volume: "0·35 to 0·43 cm3",
    Thousand_grain_Mass: "0·351 to 0·452kg",
    porosity: "0·115 to 0·304",
    projected_area: "1·11 to 1·53cm2",
    bulk_density: "868 to 768kg/m3",
    kernel_density: "980 to 1103 kg/m3",
    ref: "H. Ö ǧ, Some Physical Properties of White Lupin, Journal of gricultural Engineering Research, Volume 69, Issue 3, 1998, Pages 273-277,ISSN 0021-8634,",
    link: "https://www.sciencedirect.com/science/article/pii/S0021863497902523",
    img: "assets/lupin.jpg",
  },
  {
    crop: "Dates",
    details:
      "Most of the date fruit processing is still traditional method. It becomes imperative to characterize the fruits with a view to understand the properties that may affect the design of machines to handle their processing. This study was to present basic principals of physical properties of date fruit (cv. Mazafati) in order to facilitate the design of some machines for its processing. Dry-basis moisture content of date fruits found to be 44.41% (47.73% for pitted dates and 18.87% for their pits). Other results showed that linear dimensions varied from 32.10 to 43.50mm in length, 20.50 to 28.20mm in width, and 19.90 to 26.90mm in thickness. Mean mass and fruit volume were measured as 8.39g and 10.31cm3, respectively. The projected areas along length (PL), width (PW), and thickness (PT) were 462.80, 716.33 and 749.86 mm2, respectively. The fruit density and pitted fruit density were measured 0.82and 1.25g/cm3  while bulk density and porosity were 0.44g/cm3 and 44.90%, respectively. The geometric mean diameter, sphericity and surface area were obtained as 27.87mm, 0.73, and 2446.70mm2,respectively. The mean coefficients of static friction were measured as 0.38, 0.43 and 0.44 on galvanized iron steel, plywood, and glass surfaces, respectively.",
    moistureContent: "44.41% d.b.",
    length: "32.10 to 43.50mm",
    width: "20.50 to 28.20mm",
    thickness: "19.90 to 26.90mm",
    mass: "8.39g",
    volume: "10.31cm3",
    fruit_density: "0.82g/cm3",
    pitted_fruit_density: "1.25g/cm3",
    bulk_density: "0.44g/cm3",
    porosity: "44.90%",
    geometric_mean_diameter: "27.87mm",
    sphericity: "0.73",
    surface_area: "2446.70mm2",
    static_K_OfFriction: "0.38 (galvanized iron), 0.43 (plywood), 0.44 (glass)",
    ref: "Jahromi, M. K., Mohtasebi, S. S., Jafari, A., Mirasheh, R. and Rafiee, S. (2008). Determination of some physical properties of date fruit (cv. Mazafati). Journal of Agricultural Technology 4(2): 1-9. Department of Agricultural Machinery, Faculty of BioSystems Engineering, University College of Agricultural and Natural Resource, University of Tehran, Tehran, Iran.",
    link: "http://www.ijat-aatsea.com/pdf/Nov_v4_n2_08/1%20IJAT2007-42-R.pdf",
    img: "assets/dates.jpg",
  },
];
