import React, { Component } from 'react';
import ReactDOM from "react-dom";
import $ from 'jquery';
import Plotly from 'react-plotly.js';
import createPlotlyComponent from 'react-plotly.js/factory'
import './metrics.css';
import Papa from 'papaparse';


const Plot = createPlotlyComponent(Plotly);

        // <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
        // <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        // <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        // <script src="https://cdn.dashjs.org/latest/dash.all.min.js"></script>

var myCSV = `id,date,org_name,used_by_physicist_count,used_by_physician_count,used_by_dosimetrist_count,used_by_administrator_count,used_by_other_count,patients_processed_count,anatomical_site_HN_count,anatomical_site_P_count,anatomical_site_L_count,average_processing_time,average_idle_time,average_session_time,average_match_dissimilarity,non_completion_count,min_priority_update_count_per_session,max_priority_update_count_per_session,mean_priority_update_count_per_session,min_import_to_done_processing,max_import_to_done_processing,mean_import_to_done_processing,min_import_to_export,max_import_to_export,mean_import_to_export,user,improvement_values,L_weight_changed_saved,L_weight_changed_not_saved,P_weight_changed_saved,P_weight_changed_not_saved,HN_weight_changed_saved,HN_weight_changed_not_saved,HN_average_weight_change,L_average_weight_change,P_average_weight_change,
1,11/05/2018,Institution-0006,0,0,0,0,4,4,1,0,3,01:32.4,00:23.5,00:17.3,0.221929122,3,0,0,0,01:32.4,01:32.4,01:32.4,00:17.3,00:17.3,00:17.3,CMD,1,2,2,2,1,2,2,2,1,3,2
2,08/05/2018,Institution-0006,0,0,0,0,2,2,1,0,1,01:32.4,00:23.5,00:58.1,0.927732593,0,0,0,0,01:32.4,01:32.4,01:32.4,00:17.3,01:38.9,00:58.1,MD,8,0,1,1,2,3,3,3,2,4,3
3,18/05/2018,Institution-0006,0,0,0,0,1,1,0,0,1,00:47.3,01:31.9,01:07.4,9.546271153,0,0,0,0,00:47.3,00:47.3,00:47.3,01:07.4,01:07.4,01:07.4,PhD,7,1,1,1,3,5,5,5,4,6,4
4,18/06/2018,Institution-0008,0,0,0,0,2,2,0,0,2,00:48.5,04:01.6,08:34.4,3.087441533,1,0,4,4,00:48.5,00:48.5,00:48.5,08:34.4,08:34.4,08:34.4,MD,4,2,2,2,4,1,3,3,1,3,5
5,19/06/2018,Institution-0008,1,0,0,0,2,3,0,0,3,00:23.4,00:33.9,56:47.3,2.577709182,1,0,0,0,00:45.2,01:42.2,01.22.5,01:07.9,52:26.7,56:47.3,CMD,2,3,1,2,2,3,1,2,5,1,2
6,31/07/2018,Institution-0005,0,0,0,0,3,3,1,1,1,00:42.0,02:28.4,00:53.9,1.270531201,1,0,3,1,00:36.2,00:49.7,00:42.0,00:49.5,00:58.3,00:53.9,Other,3,2,0,1,1,2,3,1,2,2,3
7,20/07/2017,Institution-0005,0,2,2,0,3,2,1,0,1,00:24.0,02:22.2,00:42.8,34:46.3,1,0,2,1,00:23.1,00:44.2,00:32.3,00:42.2,00:44.3,00:42.9,Other,3,2,0,1,1,2,2,2,1,1,2
`

let myValues;

Papa.parse(myCSV, {
  header: true,
  complete: function(results) {
    myValues = results;
  }
})


class App extends Component {
    includeClinicRow(row, clinic) {
        if(clinic === "all" || clinic===row['org_name']){
            let org_name = row['org_name'];
            return true;
        }
    }

    plotMatchDissimilarity(clinic_val) {

    }
    render() {
        return (
        );
     }
}

export default App;
