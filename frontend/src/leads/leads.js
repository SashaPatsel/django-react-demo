import React, {Component, Fragment} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types"; 
import { getLeads, deleteLead } from "../actions/leads";
import leads from "../reducers/leads";
import Form from "../components/Form"


export class Leads extends Component {
    staticPropTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLeads: PropTypes.func.isRequired
    }

    componentDidMount = () => {
        this.props.getLeads()
    }

    render() {
        return (
            <Fragment>
                <Form></Form>
                <div className="container">
                <h2>Table</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.map(lead => (
                            <tr key={lead.id}>
                                <td>{lead.id}</td>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                                <td><button className="btn btn-danger btn-sm" onClick={() => this.props.deleteLead(lead.id)}>X</button></td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                </div>
            </Fragment>
        )
    }
};

const mapStateToProps = state => ({
 leads: state.leads.leads 
})

export default connect(mapStateToProps, {getLeads, deleteLead})(Leads);