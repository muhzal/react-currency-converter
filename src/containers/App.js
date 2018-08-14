import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import AmountInput from 'components/AmountInput';
import ErrorModal from 'components/ErrorModal';
import Loader from 'components/Loader';
import CurrencyList from 'components/CurrencyList';
import { currencyList } from 'constants/currency';
import {
  fetchCurrencyAction,
  deleteCurrencyAction,
  addCurrencyAction,
} from 'actions/currency';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrency: () => {
      dispatch(fetchCurrencyAction());
    },
    deleteCurrency: (symbol) => {
      dispatch(deleteCurrencyAction(symbol));
    },
    addCurrency: (symbol) => {
      dispatch(addCurrencyAction(symbol));
    },
  };
};

const mapStateToProps = ({ currency }) => ({
  base: currency.base,
  rates: currency.rates,
  error: currency.error,
  symbols: currency.symbols,
  isLoading: currency.isLoading,
});

export class App extends Component {
  static propTypes = {
    base: PropTypes.string,
    addCurrency: PropTypes.func,
    deleteCurrency: PropTypes.func,
    fetchCurrency: PropTypes.func,
    rates: PropTypes.object,
    symbols: PropTypes.array,
    isLoading: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      amount: 1,
      alert: true,
    };
  }

  componentDidMount() {
    this.props.fetchCurrency();
  }

  get rates() {
    const { rates, symbols } = this.props;
    const newRates = [];

    if (Object.keys(rates).length > 0) {
      for (var i = 0; i < symbols.length; i++) {
        newRates.push({
          symbol: symbols[i],
          value: rates[symbols[i]],
          text: currencyList[symbols[i]],
        });
      }
    }

    return newRates;
  }

  handleChangeAmountInput = (amount) => {
    this.setState({ amount });
  };

  render() {
    return (
      <Layout>
        <Loader show={this.props.isLoading} />
        <AmountInput
          onChange={this.handleChangeAmountInput}
          base={this.props.base}
        />
        <ErrorModal
          message={this.props.error}
          show={this.props.error !== null}
          title="Failed retrieve currency data"
          onRetry={this.props.fetchCurrency}
        />
        <CurrencyList
          amount={this.state.amount}
          rates={this.rates}
          base={this.props.base}
          deleteCurrency={this.props.deleteCurrency}
          addCurrency={this.props.addCurrency}
          symbols={this.props.symbols}
          error={this.props.error}
        />
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
