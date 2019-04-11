import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getAddress,
  getAddressSecond,
  submitTransfer
} from "./Redux/Global/actions";
import { Label, Form, Input, Button } from "reactstrap";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addressone: "",
      balanceone: "",
      addresstwo: "",
      balancetwo: "",
      value: ""
    };
  }
  handleChange = e => {
    e.preventDefault();
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ ...state });
  };
  componentWillMount() {
    this.props.getAddress();
    this.props.getAddressSecond();
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.dataone !== null &&
      nextProps.dataone !== this.props.dataone
    ) {
      let state = this.state;
      state.addressone = nextProps.dataone.address;
      state.balanceone = nextProps.dataone.balance;
      this.setState({ ...state });
    }
    if (
      nextProps.datatwo !== null &&
      nextProps.datatwo !== this.props.datatwo
    ) {
      let state = this.state;
      state.addresstwo = nextProps.datatwo.address;
      state.balancetwo = nextProps.datatwo.balance;
      this.setState({ ...state });
    }
    if (nextProps.response !== null && nextProps != this.props.response) {
      if (
        nextProps.response.status === 201 ||
        nextProps.response.status === 200
      ) {
        this.notify();
        this.props.getAddress();
        this.props.getAddressSecond();
      }
    }
  }
  notify = () => toast("Transaction Successful");

  handleSubmit = () => {
    let { addressone, addresstwo, value } = this.state;
    var newtx = {
      inputs: [{ addresses: [addressone] }],
      outputs: [{ addresses: [addresstwo], value: parseInt(value) }]
    };
    this.props.submitTransfer(newtx);
  };
  render() {
    let { addressone, balanceone, addresstwo, balancetwo, value } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {this.props.dataone === null ? (
            <div>Loading.......</div>
          ) : (
            <div>
              <div>
                <Label sm={6}>Address 1</Label>
                <Label sm={6}>{addressone}</Label>
                <Label sm={6}>Balance 1</Label>
                <Label sm={6}>{balanceone}</Label>
              </div>
              <div>
                <Label sm={6}>Address 2</Label>
                <Label sm={6}>{addresstwo}</Label>
                <Label sm={6}>Balance 2</Label>
                <Label sm={6}>{balancetwo}</Label>
              </div>
              <Form>
                <Label>Enter the amount you wish to transfer</Label>
                <Input
                  type="number"
                  required
                  name="value"
                  value={value}
                  onChange={e => this.handleChange(e)}
                />
                <Button onClick={() => this.handleSubmit()}>Submit</Button>
              </Form>
            </div>
          )}
        </header>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAddress: () => {
      dispatch(getAddress());
    },
    getAddressSecond: () => {
      dispatch(getAddressSecond());
    },
    submitTransfer: payload => {
      dispatch(submitTransfer(payload));
    }
  };
}

const mapStateToProps = state => ({
  dataone: state.globalReducer.dataone,
  datatwo: state.globalReducer.datatwo,
  response: state.globalReducer.response
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
