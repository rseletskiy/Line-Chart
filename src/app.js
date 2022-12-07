import { chart } from "./chart";
import { getChartData } from "./data";
import "./styles.scss";

const lineChart = chart(document.getElementById("chart"), getChartData());
lineChart.init();
