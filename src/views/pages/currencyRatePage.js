import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/ducks/currency/actions';
import { Link } from 'react-router-dom';
import LoadingIndicator from '../components/loadingIndicator';
import CurrencyRateTable from '../components/currencyRateTable';
import '../../styles/_currencyRatePage.scss';


class CurrencyRatesPage extends Component {

  componentWillMount() {
    this.props.actions.requestLoadRates();
  }

  render() {

    return(
      <div className="currencyRatePage">
        <div className="currencyRateTableWrpr">
          <CurrencyRateTable data={this.props.rates} />
          <div className="currencyRateTable__manageBtns">
            <div className="currencyRateTable__manageBtns__item">
              <button
                className="currencyRateTable__manageBtns__refresh"
                onClick={() => this.props.actions.requestLoadRates()}
              >
                Refresh
              </button>
            </div>
            <div className="currencyRateTable__manageBtns__item">
              <Link to="/settings" className="currencyRateTable__manageBtns__addNew">Add new</Link>
            </div>
          </div>
        </div>
        { this.props.isLoading? <LoadingIndicator /> : null }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rates: state.currency.rates,
    isLoading: state.currency.isLoading,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
};

CurrencyRatesPage.propTypes = {
  rates: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(CurrencyRatesPage);