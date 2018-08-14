import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';
import CurrencyItem from 'components/CurrencyItem';
import CurrencyInput from 'components/CurrencyInput';

class CurrencyList extends PureComponent {
  static propTypes = {
    amount: PropTypes.number,
    base: PropTypes.string,
    error: PropTypes.string,
    deleteCurrency: PropTypes.func,
    addCurrency: PropTypes.func,
    rates: PropTypes.array,
    symbols: PropTypes.array,
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const scrollHeight = this.listContainer.scrollHeight;
    const height = this.listContainer.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.listContainer.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  renderItem() {
    const { rates, amount, base, deleteCurrency } = this.props;

    return rates.map((rate) => (
      <CurrencyItem
        amount={amount}
        base={base}
        key={rate.symbol}
        onDelete={deleteCurrency}
        {...rate}
      />
    ));
  }

  render() {
    return (
      <Card className="rounded-0 ">
        <CardBody
          className="p-0 border-bottom bg-dark"
          hidden={this.props.rates.length === 0}
        >
          <div
            className="p-3"
            style={{
              maxHeight: window.innerHeight - 230,
              overflowY: 'auto',
            }}
            ref={(el) => (this.listContainer = el)}
          >
            {this.renderItem()}
          </div>
        </CardBody>
        <CurrencyInput
          onSubmit={this.props.addCurrency}
          symbols={this.props.symbols}
        />
      </Card>
    );
  }
}

export default CurrencyList;
