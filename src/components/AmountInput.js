import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { currencyList } from 'constants/currency';
import { currencyMask } from 'utils/formatNumber';
import { Card, CardBody, InputGroup, InputGroupAddon, Input } from 'reactstrap';

class AmountInput extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    base: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
    };
  }

  handleChangeAmount = (event) => {
    let value = event.target.value.replace(/[^0-9.]+/g, '') || 1;

    if (!value || value < 1 || isNaN(+value)) {
      value = 1;
    }

    this.setState({ amount: value + '' }, () => {
      if (this.props.onChange) {
        this.props.onChange(
          parseFloat(currencyMask(value).replace(/[^0-9.]+/g, '')),
        );
      }
    });
  };

  render() {
    return (
      <Card className="rounded-0">
        <CardBody>
          <p>
            {this.props.base} - {currencyList[this.props.base]}
          </p>
          <InputGroup>
            <Input
              type="text"
              id="amount"
              name="amount"
              pattern="[0-9]*"
              className="form-control text-right"
              value={currencyMask(this.state.amount)}
              onChange={this.handleChangeAmount}
            />
            <InputGroupAddon addonType="append">
              {this.props.base}
            </InputGroupAddon>
          </InputGroup>
        </CardBody>
      </Card>
    );
  }
}

export default AmountInput;
