import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrl: './directorio.component.scss'
})
export class DirectorioComponent {
  displayedColumns:string[]=['Nombre','Area','Extension','Correo','Telefono'];
  dataSource1=new MatTableDataSource(ELEMENT_DATA1);
  dataSource2=new MatTableDataSource(ELEMENT_DATA2);
  dataSource3=new MatTableDataSource(ELEMENT_DATA3);
  dataSource4=new MatTableDataSource(ELEMENT_DATA4);
  dataSource5=new MatTableDataSource(ELEMENT_DATA5);
  dataSource6=new MatTableDataSource(ELEMENT_DATA6);
  dataSource7=new MatTableDataSource(ELEMENT_DATA7);
  dataSource8=new MatTableDataSource(ELEMENT_DATA8);
  dataSource9=new MatTableDataSource(ELEMENT_DATA9);
  dataSource10=new MatTableDataSource(ELEMENT_DATA10);
  dataSource11=new MatTableDataSource(ELEMENT_DATA11);
  dataSource12=new MatTableDataSource(ELEMENT_DATA12);
  dataSource13=new MatTableDataSource(ELEMENT_DATA13);
  dataSource14=new MatTableDataSource(ELEMENT_DATA14);
  dataSource15=new MatTableDataSource(ELEMENT_DATA15);
  dataSource16=new MatTableDataSource(ELEMENT_DATA16);
  dataSource17=new MatTableDataSource(ELEMENT_DATA17);
  dataSource18=new MatTableDataSource(ELEMENT_DATA18);
  dataSource19=new MatTableDataSource(ELEMENT_DATA19);

  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource1.filter=filterValue.trim().toLowerCase();
    this.dataSource2.filter=filterValue.trim().toLowerCase();
    this.dataSource3.filter=filterValue.trim().toLowerCase();
    this.dataSource4.filter=filterValue.trim().toLowerCase();
    this.dataSource5.filter=filterValue.trim().toLowerCase();
    this.dataSource6.filter=filterValue.trim().toLowerCase();
    this.dataSource7.filter=filterValue.trim().toLowerCase();
    this.dataSource8.filter=filterValue.trim().toLowerCase();
    this.dataSource9.filter=filterValue.trim().toLowerCase();
    this.dataSource10.filter=filterValue.trim().toLowerCase();
    this.dataSource11.filter=filterValue.trim().toLowerCase();
    this.dataSource12.filter=filterValue.trim().toLowerCase();
    this.dataSource13.filter=filterValue.trim().toLowerCase();
    this.dataSource14.filter=filterValue.trim().toLowerCase();
    this.dataSource15.filter=filterValue.trim().toLowerCase();
    this.dataSource16.filter=filterValue.trim().toLowerCase();
    this.dataSource17.filter=filterValue.trim().toLowerCase();
    this.dataSource18.filter=filterValue.trim().toLowerCase();
    this.dataSource19.filter=filterValue.trim().toLowerCase();
  }
}

export interface Directorio{
  Nombre:string;
  Area:string;
  Extension:number;
  Correo:string;
  Telefono:string;
}
const ELEMENT_DATA1:Directorio[]=[
  {Nombre:'RAIF SHAHIN ISHAC',Area:'DIRECCIÓN COMERCIALIZACIÓN',Extension:106,Correo:'raif@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'ISRAEL GONZÁLEZ LEÓN',Area:'DIRECCIÓN GENERAL',Extension:116,Correo:'i.gonzalez@rcu.com.mx ',Telefono:'N/A'},
  {Nombre:'SUSANA RODRÍGUEZ',Area:'REDES SOCIALES',Extension:117,Correo:'socialmedia@rcu.com.mx; srodriguez@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'ERIKA FERRA',Area:'ASISTENTE DE DIRECCIÓN ',Extension:117,Correo:'ad@rcu.com.mx',Telefono:'5551757299'},
  {Nombre:'KARINA V. SOTO MIRANDA',Area:'ASISTENTE ING. RAIF',Extension:104,Correo:'ksoto@rcu.com.mx',Telefono:'5581038233'},
];

const ELEMENT_DATA2:Directorio[]=[
  {Nombre:'VICTOR HUGO ORTIZ RODRÍGUEZ',Area:'GERENCIA TESORERÍA',Extension:111,Correo:'vhortiz@rcu.com.mx',Telefono:'5566740085'},
  {Nombre:'EDGAR TORRES MATT',Area:'COORDINACIÓN DE FINANZAS',Extension:112,Correo:'edgart@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'OMAR HERNANDEZ RENDON',Area:'JEFATURA DE CONTABILIDAD',Extension:113,Correo:'avazquez@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'JESUS AMEKATZIN AGUILAR FRAGOSO',Area:'LIDER DE PROYECTO CONTABLE',Extension:0,Correo:'becariocontabilidad@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'JULIO CÉSAR JUÁREZ ROSALES',Area:'LIDER DE GESTION INTERNA',Extension:114,Correo:'jcjuarez@rcu.com.m',Telefono:'N/A'},
  {Nombre:'FERNANDO CARVALHO GARCÍA',Area:'AUX. DE CONTABILIDAD',Extension:0,Correo:'fcarvalho@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'ROSAS MORA COPY',Area:'AUX. ADMINISTRATIVO',Extension:0,Correo:'',Telefono:'N/A'},
  {Nombre:'REYES HERNANDEZ YANELI',Area:'LIDER DE FACTURACION',Extension:0,Correo:'',Telefono:'N/A'},
  {Nombre:'JESUS MANUEL LOPEZ HERNANDES',Area:'',Extension:0,Correo:'',Telefono:'N/A'},
];

const ELEMENT_DATA3:Directorio[]=[
  {Nombre:'JENNIFER GISEL ORTIZ LÓPEZ',Area:'JEFATURA DE COMPRAS',Extension:107,Correo:'jortiz@rcu.com.mx',Telefono:'5551757632'},
  {Nombre:'ROSARIO HERNÁNDEZ MEDINA',Area:'JEFATURA DE SEGUIMIENTO ADMINISTRATIVO',Extension:108,Correo:'rhernandez@rcu.com.mx',Telefono:'N/A'},
];

const ELEMENT_DATA4:Directorio[]=[
  {Nombre:'ANDREA BURGOS MARTÍNEZ',Area:'AUX. DE ALMACÉN',Extension:161,Correo:'aburgos@rcu.com.mx',Telefono:'5519548377'},
  {Nombre:'LUIS GONZÁLEZ',Area:'JEFATURA DE ALMACÉN',Extension:164,Correo:'lgonzalez@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'MARTIN AGULAR ',Area:'AUX. DE ALMACÉN',Extension:0,Correo:'',Telefono:''},

];

const ELEMENT_DATA5:Directorio[]=[
  {Nombre:'ERIKA NAVARRETE TÉLLEZ',Area:'COORDINACIÓN RRHH',Extension:181,Correo:'enavarrete@rcu.com.mx',Telefono:'5514520492'},
  {Nombre:'RAMIRO RODRÍGUEZ ARIAS',Area:'JEFATURA DE RRHH',Extension:182,Correo:'rrodriguez@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'ALEJANDRA ADAYA',Area:'AUXILIAR RRHH',Extension:183,Correo:'auxiliarrh2@rcu.com.mx',Telefono:'5519548718'},
  {Nombre:'ANDREA LOPEZ',Area:'AUXILIAR RRHH',Extension:185,Correo:'auxiliarrh3@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'JOHAN MOLINA',Area:'AUXILIAR RRHH',Extension:185,Correo:'auxiliarrh@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'CARO ZARATE',Area:'RECEPCIÓN',Extension:101,Correo:'recepcion@rcu.com.mx',Telefono:'5543947155'},
];

const ELEMENT_DATA6:Directorio[]=[
  {Nombre:'Daniel Villagomez Silva',Area:'Gerencia Operaciones',Extension:121,Correo:'dvillagomez@rcu.com.mx',Telefono:'5567916777'},
  {Nombre:'Beatriz Ortiz Ponce',Area:'COORDINACIÓN ADMINISTRATIVA DE OPERACIONES (LOGÍSTICA)',Extension:122,Correo:'bponce@rcu.com.mx',Telefono:'5545555985'},
  {Nombre:'FERNANDO GARDUÑO VELÁZQUEZ',Area:'COORDINACIÓN DE OPERACIONES',Extension:124,Correo:'fgarduno@rcu.com.mx',Telefono:'5581040302'},
  {Nombre:'LIDIA PÉREZ PÉREZ',Area:'JEFATURA DE APOYO ADMINISTRATIVO DE OPERACIONES',Extension:165,Correo:'lperez@rcu.com.mx',Telefono:'5580776224'},
  {Nombre:'EMILIO TAPIA AGUIRRE',Area:'LIDER DE INSTALACIONES',Extension:162,Correo:'etapia@rcu.com.mx',Telefono:'5567916887'},
  {Nombre:'PEDRO VILLAGÓMEZ SILVA',Area:'LIDER DE INSTALACIONES',Extension:163,Correo:'pvillagomez@rcu.com.mx',Telefono:'5635748905'},
  {Nombre:'GERARDO RODRÍGUEZ',Area:'OPERACIONES',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'ALFREDO GUZMÁN VALENZUELA',Area:'INSTALADOR',Extension:0,Correo:'aguzman@rcu.com.mx',Telefono:'5564225531'},
  {Nombre:'ELÍAS MANUEL AGUILAR FERNÁNDEZ',Area:'INSTALADOR',Extension:0,Correo:'maguilar@rcu.com.mx',Telefono:'5519620195'},
  {Nombre:'David Balanzar',Area:'Operaciones',Extension:0,Correo:'dbalanzar@rcu.com.mx',Telefono:'5579090334'},
  {Nombre:'EMMANUEL JAIME',Area:'JEFATURA DE OPERACIONES',Extension:0,Correo:'ejaime@rcu.com.mx',Telefono:'5566295321'},
  {Nombre:'ALBERTO RESÉNDIZ',Area:'JEFATURA DE ALARMAS',Extension:0,Correo:'',Telefono:''},
  {Nombre:'JOSUÉ MEJÍA CORONA',Area:'',Extension:0,Correo:'',Telefono:''},
  {Nombre:'JOSE LUIS RIVERA ARREDONDO',Area:'CHOFER ',Extension:0,Correo:'jlrivera@rcu.com.mx',Telefono:'5530382625'},
  {Nombre:'LUIS ANTONIO ALDANA ALANIS',Area:'OPERACIONES',Extension:0,Correo:'',Telefono:''},
  {Nombre:'ERIK ANTONIO CARRASCO MORENO',Area:'OPERACIONES',Extension:0,Correo:'laldana@rcu.com.mx',Telefono:'5567917112'},
  {Nombre:'JOSÉ EMILIO CRUZ GUTIÉRREZ',Area:'INSTALADOR',Extension:0,Correo:'jecruz@rcu.com.mx',Telefono:'5581040351'},
  {Nombre:'MARIO MENDOZA SALGADO',Area:'INSTALADOR',Extension:0,Correo:'mmendoza@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'ANTONIO CARRASCO LARA',Area:'INSTALADOR',Extension:0,Correo:'acarrasco@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'JOVAN MARTÍNEZ',Area:'INSTALADOR',Extension:0,Correo:'amartinez@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'GABRIEL TOLEDO',Area:'INSTALADOR',Extension:0,Correo:'gtoledo@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'JOSÉ RICARDO DÍAZ SÁNCHEZ',Area:'LOGÍSTICA',Extension:0,Correo:'rdiaz@rcu.com.mx',Telefono:'5566108220'},
  {Nombre:'DAVID REYES',Area:'INSTALADOR',Extension:0,Correo:'dreyes@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'Emanuel Alejandro Jaime Hernandez',Area:'Jefatura de instalaciones',Extension:0,Correo:'ejaime@rcu.com.mx',Telefono:'5566295321'},
  {Nombre:'ERIK ANTONIO CARRASCO MORENO',Area:'Lider instalador',Extension:0,Correo:'ecarrasco@rcu.com.mx',Telefono:'5535227004'},
  {Nombre:'OMAR MURCIA MARTÍNEZ',Area:'Instalador',Extension:0,Correo:'omurcia@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'URIEL FRANCISCO SUÁREZ MARTÍNEZ',Area:'Jefatura de instalaciones',Extension:0,Correo:'usuarez@rcu.com.mx',Telefono:'5567917112'},
  {Nombre:'Edwin Jonathan Martinez Garcia',Area:'Instalador',Extension:0,Correo:'jmartinez@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'LEONEL SANDOVAL BENITEZ',Area:'Instalador',Extension:0,Correo:'lsandoval@rcu.com.mx',Telefono:'5551757631'},
  {Nombre:'Hugo Andres Velazquez Badillo',Area:'Ing. de Campo',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'Joaquín de Jesús Jiménez Murillo',Area:'Jefatura de servicios',Extension:0,Correo:'jjimenez@rcu.com.mx',Telefono:'5610422151'},
  {Nombre:'LUIS ALBERTO DIAZ GONZALEZ',Area:'Instalador',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'ANGEL SANCHEZ ESPINOZA',Area:'Instalador',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'SAMUEL ALBERTO CRUZ MEZA',Area:'Ing. de Campo',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'JESUS ARIAS LOZANO',Area:'Instalador',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'URIEL SOTELO MENDEZ',Area:'Instalador',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'RAUL CRUZ BAUTISTA',Area:'Instalador',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'RODRIGO CRUZ MOCTEZUMA',Area:'Instalador',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'FERNANDO MEJIA GAYTAN',Area:'Instalador',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'ALBERTO MARIN MENDOZA',Area:'Instalador',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'FRANCISCO ALANIS',Area:'N/A',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'Emmanuel Uriel Gordillo Romero',Area:'Ing. de Soporte',Extension:0,Correo:'egordillo@rcu.com.mx',Telefono:'5514520393'},

];

const ELEMENT_DATA7:Directorio[]=[
  {Nombre:'SALVADOR AYALA',Area:'GERENTE',Extension:171,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'ABRAHAM GONZÁLEZ GONZÁLEZ',Area:'COORDINACION DE INFORMÁTICA',Extension:174,Correo:'agonzalez@rcu.com.mx',Telefono:'5581031129'},
  {Nombre:'JUAN CARLOS NACIF',Area:'JEFE DE SERVIDORES Y VIRTUALIZACION',Extension:0,Correo:'jnacif@rcu.com.mc',Telefono:'5566968039'},
  {Nombre:'ALEJANDRO ROMERO PACHECO',Area:'JEFATURA SOPORTE TECNICO DE SISTEMAS',Extension:137,Correo:'aromero@rcu.com.mx',Telefono:'5545555986'},
  {Nombre:'FREDDY RUIZ',Area:'COORDINACIÓN DE INFRAESTRUCTURA',Extension:173,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'DANIEL MARVAN',Area:'AUX. DE SOPRTE TECNICO',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'NATALY MORENO',Area:'ANALISTA DE PROCESOS',Extension:0,Correo:'nmoreno@rcu.com',Telefono:'N/A'},
  {Nombre:'MARCO CORNEJO',Area:'BECARIO',Extension:0,Correo:'N/A',Telefono:'N/A'},
]

const ELEMENT_DATA8:Directorio[]=[
  {Nombre:'DIEGO OMAR YÁÑEZ GONZÁLEZ',Area:'COORDINACIÓN INFOMECA',Extension:139,Correo:'dyanez@rcu.com.mx',Telefono:'5576666160'},
  {Nombre:'JORGE ALBERTO MORENO',Area:'LIDER ANALISTA',Extension:0,Correo:'jamoreno@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'LAYLA DARINKA CARRILLO JIMÉNEZ',Area:'ENLACE DOCUMENTAL',Extension:0,Correo:'becarioing1@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'RUBEN ELIAS MARTELL PANIAGUA',Area:'ENLACE DOCUMENTAL',Extension:0,Correo:'becarioing2@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'EMILIANO VALDOVINOS',Area:'ENLACE DOCUMENTAL',Extension:0,Correo:'becarioing3@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'IMELDA MARINA FLORES AGUAYO',Area:'ENLACE DOCUMENTAL',Extension:0,Correo:'becarioing2@rcu.com.mx',Telefono:'N/A'},
]

const ELEMENT_DATA9:Directorio[]=[
  {Nombre:'ALEJANDRO ROBLES CEBALLOS',Area:'GERENTE',Extension:131,Correo:'arobles@rcu.com.mx',Telefono:'5567916772'},
  {Nombre:'YOSELIN ENCISO',Area:'AUXILIAR ADMINISTRATIVO ',Extension:138,Correo:'N/A',Telefono:'5567041083'},
  {Nombre:'NELLY BERROCAL RIVAS',Area:'JEFATURA DE CONTROL DOCUMENTAL Y DESPENSAS ',Extension:134,Correo:'N/A',Telefono:'5566295320'},
  {Nombre:'IVAN ROMAN',Area:'COORDINACIÓN DE REFUGIOS',Extension:102,Correo:'iroman@rcu.com.mx',Telefono:'5581043393'},
  {Nombre:'JOSÉ ERNESTO SÁNCHEZ RIVERA',Area:'JEFATURA DE CONTROL ADMINISTRATIVO Y LOGÍSTICO ',Extension:105,Correo:'esanchez@rcu.com.mx',Telefono:'5530300644'},
  {Nombre:'WANDA ESPINOZA',Area:'AUXILIAR ADMINISTRATIVO ',Extension:0,Correo:'N/A',Telefono:'N/A'}, 
  {Nombre:'ALBERTO RIVERA ARREDONDO',Area:'IMP',Extension:0,Correo:'arivera@rcu.com.mx',Telefono:'5514520049'}, 
  {Nombre:'J. GUADALUPE ALBINO MEDINA RODRÍGUEZ',Area:'IMP',Extension:0,Correo:'N/A',Telefono:'5579061285'}, 
  {Nombre:'ADRIÁN HUGO QUINTANA TOSQUI',Area:'IMP',Extension:0,Correo:'N/A',Telefono:'5567040078'}, 
  {Nombre:'LUIS ALADANA ',Area:'IMP',Extension:0,Correo:'N/A',Telefono:'5576666171'}, 
]

const ELEMENT_DATA10:Directorio[]=[
  {Nombre:'JUAN MANUEL FUENTES HERRERA',Area:'COORDINACIÓN DE COMERCIALIZACIÓN IP',Extension:141,Correo:'juanfuentes@rcu.com.mx',Telefono:'5533989262'},
  {Nombre:'MELISA SANDOVAL BENÍTEZ',Area:'COMERCIALIZACIÓN',Extension:142,Correo:'msandoval@rcu.com.mx',Telefono:'5535227016'},
  {Nombre:'ALEXANDER PAOLA SÁNCHEZ BAÑOS',Area:'COORDINACÓN DE COMERCIALIZACIÓN GOBIERNO',Extension:143,Correo:'psanchez@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'KARLA JIMENEZ VEGA',Area:'AUX. ADMINISTRATIVO',Extension:119,Correo:'N/A',Telefono:'N/A'},

]

const ELEMENT_DATA11:Directorio[]=[
  {Nombre:'JOSE ALFONSO SÁNCHEZ VALBERDE',Area:'GERENTE SEGURIDAD',Extension:151,Correo:'avalberde@rcu.com.mx',Telefono:'5551015178'},
  {Nombre:'MIREYA PÉREZ RAMÍREZ',Area:'COORDINACIÓN SEGURIDAD',Extension:152,Correo:'mireyaperez@rcu.com.mx',Telefono:'5530193779'},
  {Nombre:'RUBÍ DANIELA MÁRQUEZ ÁVILA',Area:'AUXILIAR ADMINISTRATIVO',Extension:153,Correo:'dmarquez@rcu.com.mx',Telefono:'5568017867'},
  {Nombre:'JOSE DE JESUS VACA FUENTES ',Area:'SUPERVISOR DE SEGURIDAD',Extension:154,Correo:'N/A',Telefono:'5530382534'},
  {Nombre:'ALBERTO',Area:'SEGURIDAD',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'RAMON MARTINEZ BELTRAN',Area:'Armero',Extension:0,Correo:'N/A',Telefono:'N/A'}, 
]

const ELEMENT_DATA12:Directorio[]=[
  {Nombre:'JAVIER HERNÁNDEZ GONZÁLEZ',Area:'GERENCIA PROYECTOS',Extension:127,Correo:'javhernandez@rcu.com.mx',Telefono:'5641635668'},
  {Nombre:'HÉCTOR HUGO MENDOZA HERNANDEZ',Area:'PROYECTOS/DISEÑADOR',Extension:126,Correo:'hmendoza@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'MIGUEL PADILLA',Area:'PROYECTOS ING. DE SERVICIOS',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'EDGAR RESENDIZ',Area:'ING. DE PROYECTOS',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'LUIS ULISES GARCIA',Area:'ING. DE PROYECTOS',Extension:0,Correo:'N/A',Telefono:'N/A'},
   
]

const ELEMENT_DATA13:Directorio[]=[
  {Nombre:'VICTOR HUGO MENDOZA REYE',Area:'GERENCIA CENTRAL DE MONITOREO',Extension:6351,Correo:'vhmendoza@rcu.com.mx',Telefono:'5567076117'},
  {Nombre:'IRIS YOSANI RUÍZ VELASCO ALATRISTE',Area:'COORDINACIÓN ADMINISTRATIVA DE DISPOSITIVOS',Extension:6352,Correo:'coordinacioncentral@rcu.com.mx',Telefono:'5566117813'},
  {Nombre:'IVAN ALATRISTE GARCÍA',Area:'JEFATURA DE DISPOSITIVOS',Extension:6354,Correo:'jefaturadedispositivos@rcu.com.mx',Telefono:'5551757630'},
  {Nombre:'ARACELI AURORA MALDONADO HERNANDEZ',Area:'JEFATURA DE ALARMAS',Extension:6353,Correo:'jefaturadealarmas@rcu.com.mx',Telefono:'5564151316'},
  {Nombre:'LISBETH REYES HERNÁNDEZ',Area:'ANALISTA CENTRAL',Extension:0,Correo:'analistainfcc@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'ALAN CHRISTIAN VALDÉS SAUZA',Area:'SUPERVISOR CENTRAL',Extension:0,Correo:'op2@rcu.com.mx',Telefono:'N/A'},
  {Nombre:'JAZMÍN MONROY PÉREZ',Area:'SUPERVISOR CENTRAL',Extension:0,Correo:'op7@rcu.com.mx',Telefono:'N/A'}, 
  {Nombre:'PATRICIA GONZALEZ GONZÁLEZ',Area:'SUPERVISOR CENTRAL',Extension:0,Correo:'op8@rcu.com.mx',Telefono:'N/A'}, 
  {Nombre:'MIGUEL BERUMEN PARRA',Area:'SUPERVISOR CENTRAL',Extension:0,Correo:'op9@rcu.com.mx',Telefono:'N/A'}, 
  {Nombre:'OSCAR RAMIREZ GARCIA',Area:'OPERADOR CENTRAL',Extension:0,Correo:'N/A',Telefono:'N/A'}, 
  {Nombre:'JONATHAN RUIZ GONZÁLEZ',Area:'CENTRAL',Extension:0,Correo:'jruiz@rcu.com.mx',Telefono:'5567075971'}, 
  {Nombre:'ARTURO CASTILLEJA',Area:'LOGÍSTICA CENTRAL',Extension:0,Correo:'N/A',Telefono:'N/A'}, 
  {Nombre:'SERGIO CASTILLO',Area:'LOGÍSTICA CENTRAL',Extension:0,Correo:'elogistica@rcu.com.mx',Telefono:'5568030788'}, 
  {Nombre:'RODRIGO BETANCOURT CRUZ',Area:'AUXILIAR ADMINISTRATIVO DE CENTRAL DE MONITOREO',Extension:0,Correo:'administrativocm@rcu.com.mx',Telefono:'N/A'}, 
  {Nombre:'IRAIS MAGDALA BERNANBE MARROQUIN',Area:'OPERADOR CENTRAL',Extension:0,Correo:'op1@rcu.com.mx',Telefono:'N/A'}, 
  {Nombre:'ARMANDO MANUEL APOLINAR BELTRAN',Area:'OPERADOR CENTRAL',Extension:0,Correo:'op3@rcu.com.mx',Telefono:'N/A'}, 
  {Nombre:'JOSÉ ROBERTO CARILLO HERNÁNDEZ',Area:'OPERADOR CENTRAL',Extension:0,Correo:'op4@rcu.com.mx',Telefono:'N/A'}, 
  {Nombre:'ILSE ILIANA SALINAS CADENA',Area:'TUM CENTRAL',Extension:0,Correo:'op5@rcu.com.mx',Telefono:'N/A'}, 
  {Nombre:'LUCERO YAÑEZ MATEOS',Area:'TUM CENTRAL',Extension:0,Correo:'op6@rcu.com.mx',Telefono:'N/A'}, 
  {Nombre:'FERNANDO ALVARADO HERNÁNDEZ',Area:'OPERADOR CENTRAL',Extension:0,Correo:'op10@rcu.com.mx',Telefono:'N/A'}, 
  {Nombre:'IVÁN PASCUAL',Area:'OPERADOR CENTRAL',Extension:0,Correo:'op11@rcu.com.mx',Telefono:'N/A'}, 
  {Nombre:'JUAN CARLOS LUNA GUERRERO',Area:'OPERADOR CENTRAL',Extension:0,Correo:'op12@rcu.com.mx',Telefono:'N/A'}, 
  {Nombre:'ALMA PATRICIA ZEPEDA RODRÍGUEZ',Area:'OPERADOR CENTRAL',Extension:0,Correo:'op13@rcu.com.mx',Telefono:'N/A'}, 
  {Nombre:'ANA YOLANDA MARTINEZ HERNÁNDEZ',Area:'OPERADOR CENTRAL',Extension:0,Correo:'op14@rcu.com.mx',Telefono:'N/A'}, 
  {Nombre:'KAREN IBARRA MONTE DE OCA',Area:'OPERADOR CENTRAL',Extension:0,Correo:'op15@rcu.com.mx',Telefono:'N/A'}, 
  {Nombre:'RAMÓN FRANCISCO ÁLVAREZ LUNA',Area:'OPERADOR CENTRAL',Extension:0,Correo:'op16@rcu.com.mx',Telefono:'N/A'}, 
  {Nombre:'ANDREA TRUJILLO RAMÍREZ',Area:'OPERADOR CENTRAL',Extension:0,Correo:'op17@rcu.com.mx',Telefono:'N/A'}, 
  {Nombre:'ISAAC MALDONADO RAMÍREZ',Area:'OPERADOR CENTRAL',Extension:0,Correo:'op19@rcu.com.mx',Telefono:'N/A'}, 
  {Nombre:'PATRICIA GONZALEZ GARCIA',Area:'N/A',Extension:0,Correo:'N/A',Telefono:'N/A'}, 
  {Nombre:'IVAN ARIEL PASCUAL FLORES',Area:'N/A',Extension:0,Correo:'N/A',Telefono:'N/A'}, 
  {Nombre:'LUIS JAVIER PEREZ LOPEZ ',Area:'N/A',Extension:0,Correo:'N/A',Telefono:'N/A'}, 
  
]

const ELEMENT_DATA14:Directorio[]=[
  {Nombre:'NORMA CELIA BAUTISTA ROMERO',Area:'DIRECCIÓN HUMANISMO Y LEGALIDAD',Extension:201.202,Correo:'norma@humanismo.mx',Telefono:'5513435622'},
  {Nombre:'ZELTZIN YAEL LÓPEZ RODRÍGUEZ',Area:'N/A',Extension:0,Correo:'zeltzin@humanismo.mx',Telefono:'N/A'},
  {Nombre:'AURA ELOÍSA ÁLVAREZ BARRIOS',Area:'N/A',Extension:0,Correo:'aura@humanismo.mx',Telefono:'N/A'},
  {Nombre:'GIONANNA GARRIDO',Area:'N/A',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'VERONICA BAEZA',Area:'N/A',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'MELISA NARVAEZ',Area:'N/A',Extension:0,Correo:'N/A',Telefono:'N/A'}, 
]

const ELEMENT_DATA15:Directorio[]=[
  {Nombre:'VIANEY HERNÁNDEZ FLORES',Area:'PSICOLOGÍA',Extension:192,Correo:'vhernandez@rcu.com.mx',Telefono:'5551757314'},
  {Nombre:'PAMELA MATAMOROS',Area:'PSICOLOGÍA',Extension:184,Correo:'pmatamoros@rcu.com.mx',Telefono:'5544948544'},

]

const ELEMENT_DATA16:Directorio[]=[
  {Nombre:'BEATRIZ MATEO FLORES',Area:'ENCARGADA DE MANTENIMIENTO',Extension:125,Correo:'bmateo@rcu.com.mx',Telefono:'5630630217'},
  {Nombre:'MOISÉS MORALES RAMÍREZ',Area:'MANTENIMIENTO',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'JOSE HERNANDEZ',Area:'MANTENIMIENTO',Extension:0,Correo:'N/A',Telefono:'N/A'},

]

const ELEMENT_DATA17:Directorio[]=[
  {Nombre:'MARTHA EUGENIA RODRIGUEZ SOSA',Area:'LÍDER DE INTENDENCIA',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'EUGENIO CRUZ SÁNCHEZ',Area:'LÍDER DE INTENDENCIA',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'INÉS NATIVIDAD OSORIO LÓPEZ',Area:'INTENDENCIA',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'VICENTE REYES URBAN',Area:'INTENDENCIA',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'EVA MARTÍNEZ GONZÁLEZ',Area:'INTENDENCIA',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'ERIKA MARTÍNEZ GONZÁLEZ',Area:'INTENDENCIA',Extension:0,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'JUAN CARLOS GONZALEZ AVILA',Area:'INTENDENCIA',Extension:0,Correo:'N/A',Telefono:'N/A'}, 
  {Nombre:'GUILLERMO GUTIÉRREZ ALCÁNTARA',Area:'MANTENIMIENTO',Extension:0,Correo:'N/A',Telefono:'N/A'},  
]

const ELEMENT_DATA18:Directorio[]=[
  {Nombre:'CARMEN',Area:'MAYORA',Extension:118,Correo:'N/A',Telefono:'N/A'},
  {Nombre:'CLAUDIA',Area:'AYUDANTE DE MAYORA',Extension:0,Correo:'N/A',Telefono:'N/A'},

]

const ELEMENT_DATA19:Directorio[]=[
  {Nombre:'KARLA CORREA',Area:'N/A',Extension:0,Correo:'N/A',Telefono:'5554022706'}, 
  {Nombre:'CARLA IBAÑEZ',Area:'N/A',Extension:0,Correo:'administracion@vinoysefue.mx',Telefono:'5632006205'}, 
  {Nombre:'ALEJANDRA ROMERO',Area:'N/A',Extension:0,Correo:'N/A',Telefono:'5541901990'}, 
  {Nombre:'FRANCISCO ALANÍS ARTEAGA',Area:'MANTENIMIENTO RESTAURANTES',Extension:0,Correo:'palanis@rcu.com.mx',Telefono:'5514520393'}, 
]


