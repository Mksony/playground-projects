import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Container from '../../common/lib/components/layout/Container';
import Button from '../../common/lib/components/button/Button';
import Quote from '../../common/lib/components/quote/Quote';
import { colors } from '../../common/lib/styles';
import * as quoteActions from './store/actions';
import {
  getAuthor,
  getFetchingState,
  getQuote,
  getErrorMessage,
} from './store/reducer';

class App extends Component {
  static propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    loadQuote: PropTypes.func.isRequired,
    errorMessage: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.props.loadQuote();
  }

  render() {
    const { quote, author, isFetching, loadQuote, errorMessage } = this.props;
    let quoteComponent;
    if (isFetching) {
      quoteComponent = <h1 style={{ textAlign: 'center' }}>Loading ...</h1>;
    } else {
      quoteComponent = <Quote text={quote} author={author} />;
    }

    return (
      <Container
        textColor="rgba(255, 255, 255, .9)"
        fullHeight
        fluid
        bgColor={colors.primary}
        vCenter
      >
        <Container textCenter>
          <h1>Get your design quote</h1>
          <Button
            size="large"
            color="secondary"
            label="Get Quote"
            onClick={loadQuote}
            disabled={isFetching}
          />
          {errorMessage && <p>{errorMessage}</p>}
        </Container>
        <Container maxWidth={600} center>
          {quoteComponent}
        </Container>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadQuote: quoteActions.loadQuote }, dispatch);

const mapStateToProps = state => {
  const author = getAuthor(state);
  const quote = getQuote(state);
  const isFetching = getFetchingState(state);
  const errorMessage = getErrorMessage(state);
  return {
    author,
    quote,
    isFetching,
    errorMessage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
