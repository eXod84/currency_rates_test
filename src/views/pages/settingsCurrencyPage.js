import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/ducks/currency/actions';
import { Link } from 'react-router-dom';
import CurrencyList from '../components/currencyList';
import '../../styles/_settingsCurrencyPage.scss';


class AddCurrencyPage extends Component {

  constructor(props) {
    super(props);

    this.setSelectCurrency = this.setSelectCurrency.bind(this);
    this.removeSelectCurrency = this.removeSelectCurrency.bind(this);
  }

  componentWillMount() {
    this.props.actions.requestLoadCurrencies();
  }

  setSelectCurrency(currency) {
    this.props.actions.setSelectedCurrency(currency);
  }

  removeSelectCurrency(currency) {
    this.props.actions.removeSelectedCurrency(currency);
  }

  render() {
    return(
      <div className="addCurrencyPage">
        <CurrencyList
          data={this.props.currencies}
          selectedCurrencies={this.props.selectedCurrencies}
          onSetSelectCurrency={this.setSelectCurrency}
          onRemoveSelectCurrency={this.removeSelectCurrency}
        />
        <div className="manageBtns"><Link className="manageBtns__acceptSettings" to="/">OK</Link></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    currencies: state.currency.currencies,
    selectedCurrencies: state.currency.selectedCurrencies,
    isLoading: state.currency.isLoading,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
};

AddCurrencyPage.propTypes = {
  currencies: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCurrencyPage);