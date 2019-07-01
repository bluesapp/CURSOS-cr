import { Injectable } from '@angular/core';
import { Servicio, State } from '../models/products';
@Injectable()
export class SelectService {

  getServicios() {
    return [
      new Servicio(1, 'Centro Canino'),
      new Servicio(2, 'Salud'),
      new Servicio(3, 'Acuatico'),
      new Servicio(4, 'Seguridad-Salud')
    ];
  }

  getStates() {
    return [
      new State(1, 2, 'CURSO PRIMEROS AUXILIOS'),
      new State(2, 2, 'CURSO PRIMEROS AUXILIOS PARA CUIDADORES DE PRIMERA INFANCIA'),
      new State(3, 2, 'CURSO  PRIMEROS AUXILIOS PARA CONDUCTORES DE VEHICULOS DE EMERGENCIA'),
      new State(4, 2, 'CURSO  CAMILLEROS'),
      new State(5, 2, 'CURSO SOPORTE VITAL BASICO'),
      new State(6, 2, 'CURSO VACUNACION'),
      new State(7, 2, 'CURSO SALVACORAZONES'),
      new State(8, 2, 'CURSO BLS-ACLS'),
      new State(9, 2, 'CURSO ACLS'),
      new State(10, 2, 'CURSO BLS'),
      new State(11, 2, 'CURSO BÁSICO DEA Y RCP (4 HORAS) POR PERSONA EN SEDE'),
      new State(12, 2, 'CURSO MANEJO VICTIMAS DE VIOLENCIA SEXUAL'),
      new State(13, 2, 'CURSO TOMA DE CITOLOGÍA'),
      new State(14, 2, 'CURSO ADMINISTRACIÓN DE MEDICAMENTOS'),
      new State(15, 2, 'CURSO LABORATORIO CLÍNICO'),
      new State(16, 2, 'CURSO MANEJO HERIDAS Y OSTOMIAS'),
      new State(17, 2, 'CURSO CUIDADO  PACIENTE CRONICO'),
      new State(18, 2, 'CURSO CIRCULANTE EN SALAS DE CIRUGIA PARA AUXILIARES DE ENFERMERIA'),
      new State(19, 2, 'DIPLOMADO EN APH Y URGENCIAS SIN BLS 160 HORAS'),
      new State(20, 2, 'DIPLOMADO EN APH Y URGENCIAS CON BLS 160 HORAS + 6 BLS'),
      new State(21, 2, 'DIPLOMADO PARA CUIDADORES DE ADULTO MAYOR 120 HORAS'),
      new State(22, 2, 'TALLER INYECTOLOGIA INTRAMUSCULAR 5 HORAS'),
      new State(23, 3, 'CURSO NATACIÓN ADULTO MAYOR'),
      new State(24, 3, 'CURSO SALVAMENTO ACUATICO SIN SALIDA  '),
      new State(25, 3, 'CURSO DE BUCEO'),
      new State(26, 3, 'CURSO INTENSIVO   10 horas '),
      new State(27, 3, 'CURSO MATRONATACION 5 HORAS  MENSUALES'),
      new State(28, 3, 'CURSO INFANTIL SABADOS'),
      new State(29, 3, 'CURSO INFANTIL DOMINGOS'),
      new State(30, 3, 'CURSO INFANTIL VACACIONAL'),
      new State(31, 3, 'CURSO HORA JARDIN ---- MENSUALIDAD'),
      new State(32, 3, 'CURSO VACACIONAL LUNES A VIERNES '),
      new State(33, 3, 'TALLER DE SALVAMENTO ACUATICO MODULO 1 120 HORAS'),
      new State(34, 3, 'TALLER DE SALVAMENTO ACUATICO MODULO 2 '),
      new State(35, 3, 'TALLER DE NATACION Y SALVAMENTO POR EXTENSION '),
      new State(36, 3, 'TALLER ACTUALIZACION  SALVAMENTO ACUATICO PRIM AUXILIOS Y SALVACORAZONES '),
      new State(37, 3, 'PROGRAMA TECNICO EN SALVAMENTO ACUATICO'),
      new State(38, 3, 'PLAN EGRESADOS 10 HORAS'),
      new State(39, 3, 'FESTIVAL ACUATICO '),
      new State(40, 3, 'SALIDA  AGUAS ABIERTAS '),
      new State(41, 3, 'SIMPOSIO SALVAMENTO ACUATICO - 1 DÍA '),
      new State(42, 3, 'SIMPOSIO SALVAMENTO ACUATICO Y SALVACORAZONES  '),
      new State(43, 3, 'SIMPOSIO SALVAMENTO ACUATICO -'),
      new State(44, 3, 'DITCHING PERSONA POR HORA'),
      new State(45, 3, 'DITCHING MANTENIMIENTO'),
      new State(46, 3, 'TALLER NATACION ESCOLTA 4 HORAS'),
      new State(47, 1, 'CURSOS CANINOS-INSCRIPCIONES'),
      new State(48, 1, 'CURSO AGILITY 6 HORAS'),
      new State(49, 1, 'CURSO TRUCOS CANINOS 4 SESIONES'),
      new State(50, 1, 'CURSO PASEADOR CANINO NIVEL BASICO'),
      new State(51, 1, 'CURSO ADIESTRADOR CANINO NIVEL 1 '),
      new State(52, 1, 'CURSO ADIESTRADOR CANINO NIVEL 2 '),
      new State(53, 1, 'CURSO DE ENTRENAMIENTO A DOMICILIO MENSUALIDAD'),
      new State(54, 1, 'CURSO OBEDIENCIA '),
      new State(55, 1, 'CURSO DE OBEDIENCIA PARA COMPETENCIA MENSUALIDAD'),
      new State(56, 1, 'CURSO DE OBENDIENCIA MANTENIMIENTO '),
      new State(57, 1, 'CURSO DE Flyball - disc dogs (por mes)'),
      new State(58, 1, 'CURSO DE COLEGIO CANINO EXTERNADO MENSUALIDAD'),
      new State(59, 1, 'CURSO DE COLEGIO CANINO INTERNADO MENSUALIDAD'),
      new State(60, 1, 'CURSO DE COLEGIO CANINO SEMI INTERNADO MENSUALIDAD'),
      new State(61, 1, 'CURSO ESCUELA DE CACHORROS '),
      new State(62, 1, 'CURSO MANTENIMIENTO AGILITY - FIN DE SEMANA'),
      new State(63, 1, 'CURSO MANTENIMIENTO AGILITY - ENTRE SEMANA'),
      new State(64, 1, 'CURSO BUSQUEDA DEPORTIVA X 28 HORAS POR MES'),
      new State(65, 1, 'CURSO INSTRUCTOR AGILITY  24 HORAS'),
      new State(66, 1, 'DIPLOMADO DE ATENCION PRE HOSPITALARIA CANINA'),
      new State(67, 1, 'DIPLOMADO DE INTERVENCIONES ASISTIDAS CON CANINOS'),
      new State(68, 1, 'DIPLOMADO DE INTERVENCIONES ASISTIDAS - MATRÍCULA CANINO'),
      new State(69, 1, 'TALLER DE CLICKER - MASAJE TERAPEUTICO'),
      new State(70, 1, 'TALLER DE ETOLOGIA CLIENTE ANTIGUO'),
      new State(71, 1, 'TALLER DE ETOLOGIA CLIENTE NUEVO'),
      new State(72, 1, 'TALLER PRACTICO DE ETOLOGIA'),
      new State(73, 1, 'TALLER DE TENENCIA RESPONSABLE DE MASCOTAS EN REGIMENES DE PH '),
      new State(74, 1, 'TALLER  DE INTERVENCIONES CANINAS'),
      new State(75, 1, 'CURSO VACACIONAL CANINOS 1 DIA POR 4 HORAS'),
      new State(76, 1, 'SEMINARIO PARA MANEJO DE GATOS X 24 HORAS'),
      new State(77, 1, 'CURSO CANICROS X 8 HORAS'),
      new State(78, 1, 'CURSO CANICROS X 6 HORAS'),
      new State(79, 1, 'SEMINARIO MASAJE TERAPEUTICO X 8 HORAS'),
      new State(80, 1, 'DIPLOMADO INTERVENCIONES ASISTIDAS CON ANIMALES'),
      new State(81, 1, 'CURSO PRIMEROS AUXILIOS CANINOS 24 HRS'),
      new State(82, 4, 'PLAN DE EMERGENCIA'),
      new State(83, 4, 'PYMES'),
      new State(84, 4, 'ASESORIA ARL - EMPRESAS '),
      new State(85, 4, 'BRIGADA DE EMERGENCIA'),
      new State(86, 4, 'ASESORIA A SIMULACROS'),
      new State(87, 4, 'SISTEMA COMANDO DE INCIDENTES'),
      new State(88, 4, 'SUPERVIVIENCIA'),
      new State(89, 4, 'TAREAS DE ALTO RIESGO')

    ];
  }


  getCiudad() {
    return [
      new Servicio(1, 'Bogota'),
      new Servicio(2, 'Cundinamarca'),
      new Servicio(3, 'Otra')
    ];
  }


  getMunicipios() {
    return [
      new State(1, 1, 'Antonio Nariño'),
      new State(2, 1, 'Barrios Unidos'),
      new State(3, 1, 'Bosa'),
      new State(4, 1, 'Candelaria'),
      new State(5, 1, 'Chapinero'),
      new State(6, 1, 'Ciudad Bolivar'),
      new State(7, 1, 'Engativa'),
      new State(8, 1, 'Fontibon'),
      new State(9, 1, 'Kennedy'),
      new State(10, 1, 'Los Martires'),
      new State(11, 1, 'Puente Aranda'),
      new State(12, 1, 'Rafael Uribe'),
      new State(13, 1, 'San Cristobal'),
      new State(14, 1, 'Santa Fe'),
      new State(15, 1, 'Suba'),
      new State(16, 1, 'Teusaquillo'),
      new State(17, 1, 'Tunjuelito'),
      new State(18, 1, 'Usaquen'),
      new State(19, 1, 'Usme'),
      new State(21, 2, 'Agua de Dios'),
      new State(22, 2, 'Alban'),
      new State(23, 2, 'Anapoima'),
      new State(24, 2, 'Anolaima'),
      new State(25, 2, 'Arbelaez'),
      new State(26, 2, 'Beltrán'),
      new State(27, 2, 'Bituima'),
      new State(28, 2, 'Bojacá'),
      new State(29, 2, 'Cabrera'),
      new State(30, 2, 'Cachipay'),
      new State(31, 2, 'Cajicá'),
      new State(32, 2, 'Caparrapí'),
      new State(33, 2, 'Caqueza'),
      new State(34, 2, 'Carmen de Carupa'),
      new State(35, 2, 'Chaguaní'),
      new State(36, 2, 'Chia'),
      new State(37, 2, 'Chipaque'),
      new State(38, 2, 'Choachí'),
      new State(39, 2, 'Chocontá'),
      new State(40, 2, 'Cogua'),
      new State(41, 2, 'Cota'),
      new State(42, 2, 'Cucunubá'),
      new State(43, 2, 'El Colegio'),
      new State(44, 2, 'El Peñón'),
      new State(45, 2, 'El Rosal1'),
      new State(46, 2, 'Facatativa'),
      new State(47, 2, 'Fómeque'),
      new State(48, 2, 'Fosca'),
      new State(49, 2, 'Funza'),
      new State(50, 2, 'Fúquene'),
      new State(51, 2, 'Fusagasuga'),
      new State(52, 2, 'Gachalá'),
      new State(53, 2, 'Gachancipá'),
      new State(54, 2, 'Gacheta'),
      new State(55, 2, 'Gama'),
      new State(56, 2, 'Girardot'),
      new State(57, 2, 'Granada2'),
      new State(58, 2, 'Guachetá'),
      new State(59, 2, 'Guaduas'),
      new State(60, 2, 'Guasca'),
      new State(61, 2, 'Guataquí'),
      new State(62, 2, 'Guatavita'),
      new State(63, 2, 'Guayabal de Siquima'),
      new State(64, 2, 'Guayabetal'),
      new State(65, 2, 'Gutiérrez'),
      new State(66, 2, 'Jerusalén'),
      new State(67, 2, 'Junín'),
      new State(68, 2, 'La Calera'),
      new State(69, 2, 'La Mesa'),
      new State(70, 2, 'La Palma'),
      new State(71, 2, 'La Peña'),
      new State(72, 2, 'La Vega'),
      new State(73, 2, 'Lenguazaque'),
      new State(74, 2, 'Machetá'),
      new State(75, 2, 'Madrid'),
      new State(76, 2, 'Manta'),
      new State(77, 2, 'Medina'),
      new State(78, 2, 'Mosquera'),
      new State(79, 2, 'Nariño'),
      new State(80, 2, 'Nemocón'),
      new State(81, 2, 'Nilo'),
      new State(82, 2, 'Nimaima'),
      new State(83, 2, 'Nocaima'),
      new State(84, 2, 'Venecia'),
      new State(85, 2, 'Pacho'),
      new State(86, 2, 'Paime'),
      new State(87, 2, 'Pandi'),
      new State(88, 2, 'Paratebueno'),
      new State(89, 2, 'Pasca'),
      new State(90, 2, 'Puerto Salgar'),
      new State(91, 2, 'Pulí'),
      new State(92, 2, 'Quebradanegra'),
      new State(93, 2, 'Quetame'),
      new State(94, 2, 'Quipile'),
      new State(95, 2, 'Rafael Reyes'),
      new State(96, 2, 'Ricaurte'),
      new State(97, 2, 'San  Antonio del  Tequendama'),
      new State(98, 2, 'San Bernardo'),
      new State(99, 2, 'San Cayetano'),
      new State(100, 2, 'San Francisco'),
      new State(101, 2, 'San Juan de Rioseco'),
      new State(102, 2, 'Sasaima'),
      new State(103, 2, 'Sesquilé'),
      new State(104, 2, 'Sibaté'),
      new State(105, 2, 'Silvania'),
      new State(106, 2, 'Simijaca'),
      new State(107, 2, 'Soacha'),
      new State(108, 2, 'Sopo'),
      new State(109, 2, 'Subachoque'),
      new State(110, 2, 'Suesca'),
      new State(111, 2, 'Supatá'),
      new State(112, 2, 'Susa'),
      new State(113, 2, 'Sutatausa'),
      new State(114, 2, 'Tabio'),
      new State(115, 2, 'Tausa'),
      new State(116, 2, 'Tena'),
      new State(117, 2, 'Tenjo'),
      new State(118, 2, 'Tibacuy'),
      new State(119, 2, 'Tibirita'),
      new State(120, 2, 'Tocaima'),
      new State(121, 2, 'Tocancipá'),
      new State(122, 2, 'Topaipí'),
      new State(123, 2, 'Ubalá'),
      new State(124, 2, 'Ubaque'),
      new State(125, 2, 'Ubaté'),
      new State(126, 2, 'Une'),
      new State(127, 2, 'Utica'),
      new State(128, 2, 'Vergara'),
      new State(129, 2, 'Viani'),
      new State(130, 2, 'Villagomez'),
      new State(131, 2, 'Villapinzón'),
      new State(132, 2, 'Villeta'),
      new State(133, 2, 'Viota'),
      new State(134, 2, 'Yacopí'),
      new State(135, 2, 'Zipacón'),
      new State(136, 2, 'Zipaquirá'),
      new State(137, 3, 'Otra'),

    ];
  }
}