import React, { Component } from 'react';

import Aux from '../Aux/Aux'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = { // enable display and disposal of the popup.
            error: null
        }

        // We rather use component*WILL*Mount:
        // -> the below calls have no side effect (we just register)
        // -> the error interceptor is registered even if the very first rendering fails,
        //     e.g. that will means that the componentDidMount method of this level is never called 
        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }


        // Don't forget to dispose (eject) the interceptors to avoid memory leaks
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        disposeModal = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.disposeModal}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;
