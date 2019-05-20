import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { showings } from './showings';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Info from '@material-ui/icons/Info';


export default class Card extends React.Component {
  state = {
    show: false
  };

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {

    return (

      <Paper>
        <div style={{ display: 'flex', flexDirection: 'row', padding: "10px", borderBottom: "1px solid rgba(224, 224, 224, 1)" }}>
          <div>
            <img
              alt="The Phantom of the Opera"
              src="https://imaging.broadway.com/images/poster-178275/w230/222222/106008-9.jpg"
              height="100"
            />
          </div>
          <div style={{paddingLeft: "10px"}}>
            <span style={{fontSize: "35px"}}><b>The Phantom of the Opera</b> Tickets</span>
            <br />
            <span style={{color: "#1d781d"}}><b>$29.00 - $215.00</b></span>
            <br />
            <div style={{display: 'flex', alignItems: 'center'}}><Info />Learn More</div>
          </div>
        </div>
        <div >
          <Table>
            <TableBody >
              {showings.map((value, i) =>
                <TableRow key={i} style={(i === 3 || i === 4 || i === 5) && this.state.show === false ? { display: 'none' } : {}}>

                  <TableCell style={{ width: "50px", padding: "10px", borderRight: "1px solid rgba(224, 224, 224, 1)" }}>
                    <div style={{ marginBottom: "3px", textAlign: "center" }}>{value.day}</div>
                    <div style={{ marginBottom: "3px", textAlign: "center" }}>{value.date}</div>
                  </TableCell>
                  <TableCell >
                    {value.shows.map((v, i) =>
                      v.seats === "sold out"
                        ?
                        <Button key={i} disabled style={{ textDecoration: "line-through", marginRight: "20px" }}>
                          {'Sold out'}
                          <br />
                          {v.time}
                        </Button>
                        :
                        <Button key={i} variant="contained" color={v.seats === "available" ? "primary" : "default"} style={{ marginRight: "20px" }}>
                          {v.time}
                        </Button>
                    )}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div style={this.state.show !== false ? { display: 'none' } : { textAlign: 'center', padding: "15px", color: "#0068d9" }}>
          <b>More Performances (4)</b>
          <KeyboardArrowDown style={{ float: 'right' }} onClick={() => this.handleClick()} />
        </div>
        <div style={this.state.show !== false ? { display: "flex", justifyContent: "center", alignItems: "center", padding: "15px", color: "#0068d9" } : { display: 'none' }}>
          <b>View Calendar</b>
          <KeyboardArrowRight onClick={() => this.handleClick()} />
        </div>
      </Paper>
    );
  }
};
