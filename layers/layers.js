var wms_layers = [];


        var lyr_satelliteonly_0 = new ol.layer.Tile({
            'title': 'satellite only',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Rural_Villages_2 = new ol.format.GeoJSON();
var features_Rural_Villages_2 = format_Rural_Villages_2.readFeatures(json_Rural_Villages_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rural_Villages_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rural_Villages_2.addFeatures(features_Rural_Villages_2);
var lyr_Rural_Villages_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rural_Villages_2, 
                style: style_Rural_Villages_2,
                interactive: false,
                title: '<img src="styles/legend/Rural_Villages_2.png" /> Rural_Villages'
            });
var format_Blocks_3 = new ol.format.GeoJSON();
var features_Blocks_3 = format_Blocks_3.readFeatures(json_Blocks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Blocks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Blocks_3.addFeatures(features_Blocks_3);
var lyr_Blocks_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Blocks_3, 
                style: style_Blocks_3,
                interactive: false,
                title: '<img src="styles/legend/Blocks_3.png" /> Blocks'
            });
var format_HUD_4 = new ol.format.GeoJSON();
var features_HUD_4 = format_HUD_4.readFeatures(json_HUD_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HUD_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HUD_4.addFeatures(features_HUD_4);
var lyr_HUD_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HUD_4, 
                style: style_HUD_4,
                interactive: false,
                title: '<img src="styles/legend/HUD_4.png" /> HUD'
            });
var format_District_5 = new ol.format.GeoJSON();
var features_District_5 = format_District_5.readFeatures(json_District_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_5.addFeatures(features_District_5);
var lyr_District_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_District_5, 
                style: style_District_5,
                interactive: false,
                title: '<img src="styles/legend/District_5.png" /> District'
            });
var format_OtherPrivateHospitals_6 = new ol.format.GeoJSON();
var features_OtherPrivateHospitals_6 = format_OtherPrivateHospitals_6.readFeatures(json_OtherPrivateHospitals_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OtherPrivateHospitals_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OtherPrivateHospitals_6.addFeatures(features_OtherPrivateHospitals_6);
var lyr_OtherPrivateHospitals_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OtherPrivateHospitals_6, 
                style: style_OtherPrivateHospitals_6,
                interactive: true,
                title: '<img src="styles/legend/OtherPrivateHospitals_6.png" /> Other Private Hospitals'
            });
var format_MMU_7 = new ol.format.GeoJSON();
var features_MMU_7 = format_MMU_7.readFeatures(json_MMU_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MMU_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MMU_7.addFeatures(features_MMU_7);
var lyr_MMU_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MMU_7, 
                style: style_MMU_7,
                interactive: true,
                title: '<img src="styles/legend/MMU_7.png" /> MMU'
            });
var format_MiniClinic_8 = new ol.format.GeoJSON();
var features_MiniClinic_8 = format_MiniClinic_8.readFeatures(json_MiniClinic_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiniClinic_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiniClinic_8.addFeatures(features_MiniClinic_8);
var lyr_MiniClinic_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MiniClinic_8, 
                style: style_MiniClinic_8,
                interactive: true,
                title: '<img src="styles/legend/MiniClinic_8.png" /> Mini Clinic'
            });
var format_RBSK_9 = new ol.format.GeoJSON();
var features_RBSK_9 = format_RBSK_9.readFeatures(json_RBSK_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBSK_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBSK_9.addFeatures(features_RBSK_9);
var lyr_RBSK_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RBSK_9, 
                style: style_RBSK_9,
                interactive: true,
                title: '<img src="styles/legend/RBSK_9.png" /> RBSK'
            });
var format_ESI_10 = new ol.format.GeoJSON();
var features_ESI_10 = format_ESI_10.readFeatures(json_ESI_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESI_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESI_10.addFeatures(features_ESI_10);
var lyr_ESI_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESI_10, 
                style: style_ESI_10,
                interactive: true,
                title: '<img src="styles/legend/ESI_10.png" /> ESI'
            });
var format_CentralGovtHospital_11 = new ol.format.GeoJSON();
var features_CentralGovtHospital_11 = format_CentralGovtHospital_11.readFeatures(json_CentralGovtHospital_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentralGovtHospital_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentralGovtHospital_11.addFeatures(features_CentralGovtHospital_11);
var lyr_CentralGovtHospital_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CentralGovtHospital_11, 
                style: style_CentralGovtHospital_11,
                interactive: true,
                title: '<img src="styles/legend/CentralGovtHospital_11.png" /> Central Govt. Hospital'
            });
var format_Admin_12 = new ol.format.GeoJSON();
var features_Admin_12 = format_Admin_12.readFeatures(json_Admin_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Admin_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Admin_12.addFeatures(features_Admin_12);
var lyr_Admin_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Admin_12, 
                style: style_Admin_12,
                interactive: true,
                title: '<img src="styles/legend/Admin_12.png" /> Admin'
            });
var format_MCHLab_13 = new ol.format.GeoJSON();
var features_MCHLab_13 = format_MCHLab_13.readFeatures(json_MCHLab_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MCHLab_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MCHLab_13.addFeatures(features_MCHLab_13);
var lyr_MCHLab_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MCHLab_13, 
                style: style_MCHLab_13,
                interactive: true,
                title: '<img src="styles/legend/MCHLab_13.png" /> MCH Lab'
            });
var format_MCHHosp_14 = new ol.format.GeoJSON();
var features_MCHHosp_14 = format_MCHHosp_14.readFeatures(json_MCHHosp_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MCHHosp_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MCHHosp_14.addFeatures(features_MCHHosp_14);
var lyr_MCHHosp_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MCHHosp_14, 
                style: style_MCHHosp_14,
                interactive: true,
                title: '<img src="styles/legend/MCHHosp_14.png" /> MCH Hosp'
            });
var format_OtherGovtHospitals_15 = new ol.format.GeoJSON();
var features_OtherGovtHospitals_15 = format_OtherGovtHospitals_15.readFeatures(json_OtherGovtHospitals_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OtherGovtHospitals_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OtherGovtHospitals_15.addFeatures(features_OtherGovtHospitals_15);
var lyr_OtherGovtHospitals_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OtherGovtHospitals_15, 
                style: style_OtherGovtHospitals_15,
                interactive: true,
                title: '<img src="styles/legend/OtherGovtHospitals_15.png" /> Other Govt.Hospitals'
            });
var format_DPHL_16 = new ol.format.GeoJSON();
var features_DPHL_16 = format_DPHL_16.readFeatures(json_DPHL_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DPHL_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPHL_16.addFeatures(features_DPHL_16);
var lyr_DPHL_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DPHL_16, 
                style: style_DPHL_16,
                interactive: true,
                title: '<img src="styles/legend/DPHL_16.png" /> DPHL'
            });
var format_GH_17 = new ol.format.GeoJSON();
var features_GH_17 = format_GH_17.readFeatures(json_GH_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GH_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GH_17.addFeatures(features_GH_17);
var lyr_GH_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GH_17, 
                style: style_GH_17,
                interactive: true,
                title: '<img src="styles/legend/GH_17.png" /> GH'
            });
var format_UrbanCHC_18 = new ol.format.GeoJSON();
var features_UrbanCHC_18 = format_UrbanCHC_18.readFeatures(json_UrbanCHC_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UrbanCHC_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanCHC_18.addFeatures(features_UrbanCHC_18);
var lyr_UrbanCHC_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UrbanCHC_18, 
                style: style_UrbanCHC_18,
                interactive: true,
                title: '<img src="styles/legend/UrbanCHC_18.png" /> Urban CHC'
            });
var format_GCCHSC_19 = new ol.format.GeoJSON();
var features_GCCHSC_19 = format_GCCHSC_19.readFeatures(json_GCCHSC_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GCCHSC_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GCCHSC_19.addFeatures(features_GCCHSC_19);
var lyr_GCCHSC_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GCCHSC_19, 
                style: style_GCCHSC_19,
                interactive: true,
                title: '<img src="styles/legend/GCCHSC_19.png" /> GCC HSC'
            });
var format_RuralCHC_20 = new ol.format.GeoJSON();
var features_RuralCHC_20 = format_RuralCHC_20.readFeatures(json_RuralCHC_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuralCHC_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuralCHC_20.addFeatures(features_RuralCHC_20);
var lyr_RuralCHC_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RuralCHC_20, 
                style: style_RuralCHC_20,
                interactive: true,
                title: '<img src="styles/legend/RuralCHC_20.png" /> Rural CHC'
            });
var format_RuralHSC_21 = new ol.format.GeoJSON();
var features_RuralHSC_21 = format_RuralHSC_21.readFeatures(json_RuralHSC_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuralHSC_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuralHSC_21.addFeatures(features_RuralHSC_21);
var lyr_RuralHSC_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RuralHSC_21, 
                style: style_RuralHSC_21,
                interactive: true,
                title: '<img src="styles/legend/RuralHSC_21.png" /> Rural HSC'
            });
var format_RuralPHC_22 = new ol.format.GeoJSON();
var features_RuralPHC_22 = format_RuralPHC_22.readFeatures(json_RuralPHC_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuralPHC_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuralPHC_22.addFeatures(features_RuralPHC_22);
var lyr_RuralPHC_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RuralPHC_22, 
                style: style_RuralPHC_22,
                interactive: true,
                title: '<img src="styles/legend/RuralPHC_22.png" /> Rural PHC'
            });
var format_UrbanHSC_23 = new ol.format.GeoJSON();
var features_UrbanHSC_23 = format_UrbanHSC_23.readFeatures(json_UrbanHSC_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UrbanHSC_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanHSC_23.addFeatures(features_UrbanHSC_23);
var lyr_UrbanHSC_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UrbanHSC_23, 
                style: style_UrbanHSC_23,
                interactive: true,
                title: '<img src="styles/legend/UrbanHSC_23.png" /> Urban HSC'
            });
var format_UrbanPHC_24 = new ol.format.GeoJSON();
var features_UrbanPHC_24 = format_UrbanPHC_24.readFeatures(json_UrbanPHC_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UrbanPHC_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanPHC_24.addFeatures(features_UrbanPHC_24);
var lyr_UrbanPHC_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UrbanPHC_24, 
                style: style_UrbanPHC_24,
                interactive: true,
                title: '<img src="styles/legend/UrbanPHC_24.png" /> Urban PHC'
            });
var group_Urban = new ol.layer.Group({
                                layers: [lyr_UrbanHSC_23,lyr_UrbanPHC_24,],
                                title: "Urban"});
var group_Rural = new ol.layer.Group({
                                layers: [lyr_RuralCHC_20,lyr_RuralHSC_21,lyr_RuralPHC_22,],
                                title: "Rural"});
var group_GCC = new ol.layer.Group({
                                layers: [lyr_UrbanCHC_18,lyr_GCCHSC_19,],
                                title: "GCC"});
var group_GH = new ol.layer.Group({
                                layers: [lyr_OtherGovtHospitals_15,lyr_DPHL_16,lyr_GH_17,],
                                title: "GH"});
var group_MedicalCollegeHospital = new ol.layer.Group({
                                layers: [lyr_MCHLab_13,lyr_MCHHosp_14,],
                                title: "Medical College Hospital"});
var group_Other = new ol.layer.Group({
                                layers: [lyr_OtherPrivateHospitals_6,lyr_MMU_7,lyr_MiniClinic_8,lyr_RBSK_9,lyr_ESI_10,lyr_CentralGovtHospital_11,lyr_Admin_12,],
                                title: "Other"});
var group_Overlays = new ol.layer.Group({
                                layers: [lyr_Rural_Villages_2,lyr_Blocks_3,lyr_HUD_4,lyr_District_5,],
                                title: "Overlays"});
var group_BaseLayers = new ol.layer.Group({
                                layers: [lyr_satelliteonly_0,lyr_OpenStreetMap_1,],
                                title: "Base Layers"});

lyr_satelliteonly_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Rural_Villages_2.setVisible(false);lyr_Blocks_3.setVisible(false);lyr_HUD_4.setVisible(false);lyr_District_5.setVisible(false);lyr_OtherPrivateHospitals_6.setVisible(false);lyr_MMU_7.setVisible(false);lyr_MiniClinic_8.setVisible(false);lyr_RBSK_9.setVisible(false);lyr_ESI_10.setVisible(false);lyr_CentralGovtHospital_11.setVisible(false);lyr_Admin_12.setVisible(false);lyr_MCHLab_13.setVisible(false);lyr_MCHHosp_14.setVisible(false);lyr_OtherGovtHospitals_15.setVisible(false);lyr_DPHL_16.setVisible(false);lyr_GH_17.setVisible(false);lyr_UrbanCHC_18.setVisible(false);lyr_GCCHSC_19.setVisible(false);lyr_RuralCHC_20.setVisible(false);lyr_RuralHSC_21.setVisible(false);lyr_RuralPHC_22.setVisible(false);lyr_UrbanHSC_23.setVisible(false);lyr_UrbanPHC_24.setVisible(false);
var layersList = [group_BaseLayers,group_Overlays,group_Other,group_MedicalCollegeHospital,group_GH,group_GCC,group_Rural,group_Urban];
lyr_Rural_Villages_2.set('fieldAliases', {'p_name_1': 'p_name_1', 'type1_1': 'type1_1', 'TALUKNAME': 'TALUKNAME', 'TALUK_ID': 'TALUK_ID', 'VILL_ID_2': 'VILL_ID_2', });
lyr_Blocks_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'b_name': 'b_name', 'dist_name': 'dist_name', 'ed_distric': 'ed_distric', 'block_id_1': 'block_id_1', 'VILL_ID_1': 'VILL_ID_1', 'VILL_ID_2': 'VILL_ID_2', 'TALUKNAME': 'TALUKNAME', 'BLOCK_LGD': 'BLOCK_LGD', 'block_id_2': 'block_id_2', });
lyr_HUD_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'HUD_GID': 'HUD_GID', 'HUD': 'HUD', 'Dist': 'Dist', 'Dist_Rev_G': 'Dist_Rev_G', 'Dist_Code': 'Dist_Code', 'dist_name': 'dist_name', 'dist_id': 'dist_id', });
lyr_District_5.set('fieldAliases', {'dist_name': 'dist_name', 'dist_id': 'dist_id', 'district_i': 'district_i', 'Type': 'Type', 'x': 'x', 'y': 'y', });
lyr_OtherPrivateHospitals_6.set('fieldAliases', {'S_NO': 'S_NO', 'Institutio': 'Institution', 'Category': 'Category', 'Type': 'Type', 'Health_Blo': 'Health Block', 'HUD': 'HUD', 'District': 'District', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_MMU_7.set('fieldAliases', {'S_NO': 'S_NO', 'Institutio': 'Institution', 'Category': 'Category', 'Type': 'Type', 'Health_Blo': 'Health Block', 'HUD': 'HUD', 'District': 'District', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_MiniClinic_8.set('fieldAliases', {'S_NO': 'S_NO', 'Institutio': 'Institution', 'Category': 'Category', 'Type': 'Type', 'Health_Blo': 'Health Block', 'HUD': 'HUD', 'District': 'District', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_RBSK_9.set('fieldAliases', {'S_NO': 'S_NO', 'Institutio': 'Institution', 'Category': 'Category', 'Type': 'Type', 'Health_Blo': 'Health Block', 'HUD': 'HUD', 'District': 'District', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_ESI_10.set('fieldAliases', {'S_NO': 'S_NO', 'Institutio': 'Institution', 'Category': 'Category', 'Type': 'Type', 'Health_Blo': 'Health Block', 'HUD': 'HUD', 'District': 'District', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_CentralGovtHospital_11.set('fieldAliases', {'S_NO': 'S_NO', 'Institutio': 'Institution', 'Category': 'Category', 'Type': 'Type', 'Health_Blo': 'Health Block', 'HUD': 'HUD', 'District': 'District', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_Admin_12.set('fieldAliases', {'S_NO': 'S_NO', 'Institutio': 'Institution', 'Category': 'Category', 'Type': 'Type', 'Health_Blo': 'Health Block', 'HUD': 'HUD', 'District': 'District', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_MCHLab_13.set('fieldAliases', {'S_NO': 'S_NO', 'Institutio': 'Institution', 'Category': 'Category', 'Type': 'Type', 'Health_Blo': 'Health Block', 'HUD': 'HUD', 'District': 'District', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_MCHHosp_14.set('fieldAliases', {'S_NO': 'S_NO', 'Institutio': 'Institution', 'Category': 'Category', 'Type': 'Type', 'Health_Blo': 'Health Block', 'HUD': 'HUD', 'District': 'District', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_OtherGovtHospitals_15.set('fieldAliases', {'S_NO': 'S_NO', 'Institutio': 'Institution', 'Category': 'Category', 'Type': 'Type', 'Health_Blo': 'Health Block', 'HUD': 'HUD', 'District': 'District', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_DPHL_16.set('fieldAliases', {'S_NO': 'S_NO', 'Institutio': 'Institution', 'Category': 'Category', 'Type': 'Type', 'Health_Blo': 'Health Block', 'HUD': 'HUD', 'District': 'District', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_GH_17.set('fieldAliases', {'S_NO': 'S_NO', 'Institutio': 'Institution', 'Category': 'Category', 'Type': 'Type', 'Health_Blo': 'Health Block', 'HUD': 'HUD', 'District': 'District', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_UrbanCHC_18.set('fieldAliases', {'S_NO': 'S_NO', 'Institutio': 'Institution', 'Category': 'Category', 'Type': 'Type', 'Health_Blo': 'Health Block', 'HUD': 'HUD', 'District': 'District', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_GCCHSC_19.set('fieldAliases', {'S_NO': 'S_NO', 'Institutio': 'Institution', 'Category': 'Category', 'Type': 'Type', 'Health_Blo': 'Health Block', 'HUD': 'HUD', 'District': 'District', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_RuralCHC_20.set('fieldAliases', {'S_NO': 'S_NO', 'Institutio': 'Institution', 'Category': 'Category', 'Type': 'Type', 'Health_Blo': 'Health Block', 'HUD': 'HUD', 'District': 'District', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_RuralHSC_21.set('fieldAliases', {'S_NO': 'S_NO', 'Institutio': 'Institution', 'Category': 'Category', 'Type': 'Type', 'Health_Blo': 'Health Block', 'HUD': 'HUD', 'District': 'District', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_RuralPHC_22.set('fieldAliases', {'S_NO': 'S_NO', 'Institutio': 'Institution', 'Category': 'Category', 'Type': 'Type', 'Health_Blo': 'Health Block', 'HUD': 'HUD', 'District': 'District', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_UrbanHSC_23.set('fieldAliases', {'S_NO': 'S_NO', 'Institutio': 'Institution', 'Category': 'Category', 'Type': 'Type', 'Health_Blo': 'Health Block', 'HUD': 'HUD', 'District': 'District', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_UrbanPHC_24.set('fieldAliases', {'S_NO': 'S_NO', 'Institutio': 'Institution', 'Category': 'Category', 'Type': 'Type', 'Health_Blo': 'Health Block', 'HUD': 'HUD', 'District': 'District', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_Rural_Villages_2.set('fieldImages', {'p_name_1': 'TextEdit', 'type1_1': 'TextEdit', 'TALUKNAME': 'Hidden', 'TALUK_ID': 'Hidden', 'VILL_ID_2': 'Hidden', });
lyr_Blocks_3.set('fieldImages', {'OBJECTID': 'Hidden', 'b_name': 'TextEdit', 'dist_name': 'Hidden', 'ed_distric': 'Hidden', 'block_id_1': 'Hidden', 'VILL_ID_1': 'Hidden', 'VILL_ID_2': 'Hidden', 'TALUKNAME': 'Hidden', 'BLOCK_LGD': 'Hidden', 'block_id_2': 'Hidden', });
lyr_HUD_4.set('fieldImages', {'OBJECTID': 'Hidden', 'HUD_GID': 'Hidden', 'HUD': 'TextEdit', 'Dist': 'Hidden', 'Dist_Rev_G': 'Hidden', 'Dist_Code': 'Hidden', 'dist_name': 'Hidden', 'dist_id': 'Hidden', });
lyr_District_5.set('fieldImages', {'dist_name': 'TextEdit', 'dist_id': 'Hidden', 'district_i': 'Hidden', 'Type': 'Hidden', 'x': 'Hidden', 'y': 'Hidden', });
lyr_OtherPrivateHospitals_6.set('fieldImages', {'S_NO': 'Hidden', 'Institutio': 'TextEdit', 'Category': 'Hidden', 'Type': 'TextEdit', 'Health_Blo': 'TextEdit', 'HUD': 'TextEdit', 'District': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_MMU_7.set('fieldImages', {'S_NO': 'Hidden', 'Institutio': 'TextEdit', 'Category': 'Hidden', 'Type': 'TextEdit', 'Health_Blo': 'TextEdit', 'HUD': 'TextEdit', 'District': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_MiniClinic_8.set('fieldImages', {'S_NO': 'Hidden', 'Institutio': 'TextEdit', 'Category': 'Hidden', 'Type': 'TextEdit', 'Health_Blo': 'TextEdit', 'HUD': 'TextEdit', 'District': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_RBSK_9.set('fieldImages', {'S_NO': 'Hidden', 'Institutio': 'TextEdit', 'Category': 'Hidden', 'Type': 'TextEdit', 'Health_Blo': 'TextEdit', 'HUD': 'TextEdit', 'District': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_ESI_10.set('fieldImages', {'S_NO': 'Hidden', 'Institutio': 'TextEdit', 'Category': 'Hidden', 'Type': 'TextEdit', 'Health_Blo': 'TextEdit', 'HUD': 'TextEdit', 'District': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_CentralGovtHospital_11.set('fieldImages', {'S_NO': 'Hidden', 'Institutio': 'TextEdit', 'Category': 'Hidden', 'Type': 'TextEdit', 'Health_Blo': 'TextEdit', 'HUD': 'TextEdit', 'District': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_Admin_12.set('fieldImages', {'S_NO': 'Hidden', 'Institutio': 'TextEdit', 'Category': 'Hidden', 'Type': 'TextEdit', 'Health_Blo': 'TextEdit', 'HUD': 'TextEdit', 'District': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_MCHLab_13.set('fieldImages', {'S_NO': 'Hidden', 'Institutio': 'TextEdit', 'Category': 'Hidden', 'Type': 'TextEdit', 'Health_Blo': 'TextEdit', 'HUD': 'TextEdit', 'District': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_MCHHosp_14.set('fieldImages', {'S_NO': 'Hidden', 'Institutio': 'TextEdit', 'Category': 'Hidden', 'Type': 'TextEdit', 'Health_Blo': 'TextEdit', 'HUD': 'TextEdit', 'District': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_OtherGovtHospitals_15.set('fieldImages', {'S_NO': 'Hidden', 'Institutio': 'TextEdit', 'Category': 'Hidden', 'Type': 'TextEdit', 'Health_Blo': 'TextEdit', 'HUD': 'TextEdit', 'District': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_DPHL_16.set('fieldImages', {'S_NO': 'Hidden', 'Institutio': 'TextEdit', 'Category': 'Hidden', 'Type': 'TextEdit', 'Health_Blo': 'TextEdit', 'HUD': 'TextEdit', 'District': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_GH_17.set('fieldImages', {'S_NO': 'Hidden', 'Institutio': 'TextEdit', 'Category': 'Hidden', 'Type': 'TextEdit', 'Health_Blo': 'TextEdit', 'HUD': 'TextEdit', 'District': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_UrbanCHC_18.set('fieldImages', {'S_NO': 'Hidden', 'Institutio': 'TextEdit', 'Category': 'Hidden', 'Type': 'TextEdit', 'Health_Blo': 'TextEdit', 'HUD': 'TextEdit', 'District': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_GCCHSC_19.set('fieldImages', {'S_NO': 'Hidden', 'Institutio': 'TextEdit', 'Category': 'Hidden', 'Type': 'TextEdit', 'Health_Blo': 'TextEdit', 'HUD': 'TextEdit', 'District': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_RuralCHC_20.set('fieldImages', {'S_NO': 'Hidden', 'Institutio': 'TextEdit', 'Category': 'Hidden', 'Type': 'TextEdit', 'Health_Blo': 'TextEdit', 'HUD': 'TextEdit', 'District': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_RuralHSC_21.set('fieldImages', {'S_NO': 'Hidden', 'Institutio': 'TextEdit', 'Category': 'Hidden', 'Type': 'TextEdit', 'Health_Blo': 'TextEdit', 'HUD': 'TextEdit', 'District': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_RuralPHC_22.set('fieldImages', {'S_NO': 'Hidden', 'Institutio': 'TextEdit', 'Category': 'Hidden', 'Type': 'TextEdit', 'Health_Blo': 'TextEdit', 'HUD': 'TextEdit', 'District': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_UrbanHSC_23.set('fieldImages', {'S_NO': 'Hidden', 'Institutio': 'TextEdit', 'Category': 'Hidden', 'Type': 'TextEdit', 'Health_Blo': 'TextEdit', 'HUD': 'TextEdit', 'District': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_UrbanPHC_24.set('fieldImages', {'S_NO': 'Hidden', 'Institutio': 'TextEdit', 'Category': 'Hidden', 'Type': 'TextEdit', 'Health_Blo': 'TextEdit', 'HUD': 'TextEdit', 'District': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_Rural_Villages_2.set('fieldLabels', {});
lyr_Blocks_3.set('fieldLabels', {});
lyr_HUD_4.set('fieldLabels', {});
lyr_District_5.set('fieldLabels', {});
lyr_OtherPrivateHospitals_6.set('fieldLabels', { 'Institution': 'inline label', 'Type': 'inline label', 'Health_Blo': 'inline label', 'HUD': 'inline label', 'District': 'inline label',});
lyr_MMU_7.set('fieldLabels', { 'Institution': 'inline label', 'Type': 'inline label', 'Health_Blo': 'inline label', 'HUD': 'inline label', 'District': 'inline label',});
lyr_MiniClinic_8.set('fieldLabels', { 'Institution': 'inline label', 'Type': 'inline label', 'Health_Blo': 'inline label', 'HUD': 'inline label', 'District': 'inline label',});
lyr_RBSK_9.set('fieldLabels', { 'Institution': 'inline label', 'Type': 'inline label', 'Health_Blo': 'inline label', 'HUD': 'inline label', 'District': 'inline label',});
lyr_ESI_10.set('fieldLabels', { 'Institution': 'inline label', 'Type': 'inline label', 'Health_Blo': 'inline label', 'HUD': 'inline label', 'District': 'inline label',});
lyr_CentralGovtHospital_11.set('fieldLabels', { 'Institution': 'inline label', 'Type': 'inline label', 'Health_Blo': 'inline label', 'HUD': 'inline label', 'District': 'inline label',});
lyr_Admin_12.set('fieldLabels', { 'Institution': 'inline label', 'Type': 'inline label', 'Health_Blo': 'inline label', 'HUD': 'inline label', 'District': 'inline label',});
lyr_MCHLab_13.set('fieldLabels', { 'Institution': 'inline label', 'Type': 'inline label', 'Health_Blo': 'inline label', 'HUD': 'inline label', 'District': 'inline label',});
lyr_MCHHosp_14.set('fieldLabels', { 'Institution': 'inline label', 'Type': 'inline label', 'Health_Blo': 'inline label', 'HUD': 'inline label', 'District': 'inline label',});
lyr_OtherGovtHospitals_15.set('fieldLabels', { 'Institution': 'inline label', 'Type': 'inline label', 'Health_Blo': 'inline label', 'HUD': 'inline label', 'District': 'inline label',});
lyr_DPHL_16.set('fieldLabels', { 'Institution': 'inline label', 'Type': 'inline label', 'Health_Blo': 'inline label', 'HUD': 'inline label', 'District': 'inline label',});
lyr_GH_17.set('fieldLabels', { 'Institution': 'inline label', 'Type': 'inline label', 'Health_Blo': 'inline label', 'HUD': 'inline label', 'District': 'inline label',});
lyr_UrbanCHC_18.set('fieldLabels', {'Institution': 'inline label', 'Type': 'inline label', 'Health_Blo': 'inline label', 'HUD': 'inline label', 'District': 'inline label',});
lyr_GCCHSC_19.set('fieldLabels', { 'Institution': 'inline label', 'Type': 'inline label', 'Health_Blo': 'inline label', 'HUD': 'inline label', 'District': 'inline label',});
lyr_RuralCHC_20.set('fieldLabels', { 'Institution': 'inline label', 'Type': 'inline label', 'Health_Blo': 'inline label', 'HUD': 'inline label', 'District': 'inline label',});
lyr_RuralHSC_21.set('fieldLabels', { 'Institution': 'inline label', 'Type': 'inline label', 'Health_Blo': 'inline label', 'HUD': 'inline label', 'District': 'inline label',});
lyr_RuralPHC_22.set('fieldLabels', { 'Institution': 'inline label', 'Type': 'inline label', 'Health_Blo': 'inline label', 'HUD': 'inline label', 'District': 'inline label',});
lyr_UrbanHSC_23.set('fieldLabels', { 'Institution': 'inline label', 'Type': 'inline label', 'Health_Blo': 'inline label', 'HUD': 'inline label', 'District': 'inline label',});
lyr_UrbanPHC_24.set('fieldLabels', { 'Institution': 'inline label', 'Type': 'inline label', 'Health_Blo': 'inline label', 'HUD': 'inline label', 'District': 'inline label',});
lyr_UrbanPHC_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});