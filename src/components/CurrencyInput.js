import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { currencyList } from "constants/currency";
import {
  Card,
  CardBody,
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  FormFeedback
} from "reactstrap";

class CurrencyInput extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func,
    symbols: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {
      symbol: "",
      error: "",
      showInput: false
    };
  }

  handleChangeInput = event => {
    const value = event.target.value + "";

    this.setState({
      symbol: value.replace(/[^A-Za-z]+/g, "").toUpperCase(),
      error: ""
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { symbol } = this.state;

    if (symbol === "") {
      this.setState({ error: "This field is required" });
    } else if (this.props.symbols.indexOf(symbol) !== -1) {
      this.setState({ error: "Currency Symbol already exists" });
    } else if (Object.keys(currencyList).indexOf(symbol) === -1) {
      this.setState({ error: "Currency Symbol is not Support" });
    } else if (this.props.onSubmit) {
      this.props.onSubmit(this.state.symbol);
      this.handleClickAddMoreButton(false);
      this.setState({ symbol: "" });
    }
  };

  handleClickAddMoreButton = (show = true) => {
    this.setState({ showInput: show }, () => {
      if (show && this.refInput) this.refInput.focus();
    });
  };

  renderAddMoreButton() {
    return (
      <button
        onClick={this.handleClickAddMoreButton}
        className="bg-transparent btn text-info btn-block"
        title="Add More Currencies"
      >
        [+] Add More Currencies
      </button>
    );
  }

  renderInput() {
    return (
      <form onSubmit={this.handleSubmit} className="position-sticky">
        <InputGroup>
          <Input
            placeholder="Currency symbol, example: USD, IDR"
            onChange={this.handleChangeInput}
            value={this.state.symbol.toUpperCase()}
            invalid={this.state.error !== ""}
            maxLength="4"
            innerRef={ref => (this.refInput = ref)}
          />
          <InputGroupAddon addonType="append">
            <Button color="info" onClick={this.handleSubmit}>
              Submit
            </Button>
          </InputGroupAddon>
          <FormFeedback>{this.state.error}</FormFeedback>
        </InputGroup>
      </form>
    );
  }

  render() {
    return (
      <Card className="border-0">
        <CardBody className="p-2 border-bottom">
          {this.state.showInput
            ? this.renderInput()
            : this.renderAddMoreButton()}
        </CardBody>
      </Card>
    );
  }
}

export default CurrencyInput;
