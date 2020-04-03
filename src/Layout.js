import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { loadRules } from "./actions/rules-actions";
import { connect } from 'react-redux';
import Header from "./Header";
import RuleList from "./RuleList";
import RuleForm from "./RuleForm";

const Layout = ({ rules, fetchRules }) => {
    useEffect(() => {
        fetchRules();
    }, []);
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="container">
        <Route exact path="/" component={RuleList} />
        <Route path="/index" component={RuleList} />
        <Route path="/new" component={RuleForm} />
        <Route path="/edit/:id" component={RuleForm} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ rules }) => ({
    rules
  });

  const mapDispatchToProps = (dispatch)=>{
    return {
        fetchRules:()=>dispatch(loadRules())
    }
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout);