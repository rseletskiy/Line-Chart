import { chart } from "./chart";
import data from './data.json';
import "./styles.scss";

const lineChart1 = chart(document.getElementById("chart-1"), data[0]);
lineChart1.init();

const lineChart2 = chart(document.getElementById("chart-2"), data[4]);
lineChart2.init();