import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      //Returns the emotions as an HTML table
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
              // code to use the .map method to extract the emotions. 
                          Object.entries(this.props.emotions).map(function (mapentry) {
                              return (
                                  <tr>
                                      <td>{mapentry[0]}</td>
                                      <td>{mapentry[1]}</td>
                                  </tr>
                              )
                          })
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;