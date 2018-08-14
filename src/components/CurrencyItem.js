import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';
import { currency } from 'utils/formatNumber';

class CurrencyItem extends PureComponent {
  static propTypes = {
    amount: PropTypes.number,
    base: PropTypes.string,
    className: PropTypes.string,
    onDelete: PropTypes.func,
    symbol: PropTypes.string,
    value: PropTypes.number,
    text: PropTypes.string,
  };

  get totalRate() {
    return currency(this.props.amount * this.props.value);
  }

  handleDeleteCurrency = (event) => {
    if (this.props.onDelete) {
      this.props.onDelete(this.props.symbol);
    }
  };

  render() {
    return (
      <Card className="mb-4 shadow">
        <CardBody className="p-2">
          <div className="row h6">
            <div className="text-uppercase text-nowrap col-sm-4 col-md-3">
              {this.props.symbol}
            </div>
            <div
              className="col-sm-8 col-md-9 text-sm-right text-left text-truncate"
              title={this.totalRate}
            >
              {this.totalRate}
            </div>
          </div>
          <p className="mb-0">
            <small className="font-weight-bold font-italic">
              <span className="text-uppercase">{this.props.symbol}</span>
              {' - '}
              <span className="text-capitalize">{this.props.text}</span>
            </small>
          </p>
          <small className="font-italic">
            <span className="text-uppercase">
              {this.props.base} : {this.props.symbol}
            </span>{' '}
            <span className="text-capitalize">
              {currency(this.props.value)}
            </span>
          </small>
          <button
            type="button"
            className="close mr-2 mt-1"
            data-dismiss="alert"
            aria-label="Close"
            title={`Remove ${this.props.symbol}`}
            onClick={this.handleDeleteCurrency}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="float-" />
        </CardBody>
      </Card>
    );
  }
}

export default CurrencyItem;
