import React from "react";
import { connect } from 'react-redux';
import RuleDescriptionField from "./RuleDescriptionField";
import RuleTitleField from "./RuleTitleField";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addRule , updateRule} from "./actions/rules-actions";
import { useDispatch } from 'react-redux';


const RuleForm = ({rules, match}) => {
    const ruleId = (match.params.id ? match.params.id : '')
    let rule = {};
    let initialValues = {};
    if (ruleId){
        rule = rules.find(item => item.id=== parseInt(ruleId));
        const { title, description } = rule;
        initialValues = {
            title: title || "",
            description: description || ""
        };
    }
    //Validation
    const validationSchema = Yup.object().shape({
        title: Yup.string()
          .max(90, "The title must be shorter than 50 characters")
          .required("Title is required"),
        description: Yup.string()
          .min(5, "The description must be longer than 5 characters")
          .max(100, "The description must be shorter than 100 characters")
      });

    const dispatch = useDispatch()

    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">New rule</h3>
            </div>
            <div className="panel-body">
                <Formik
                    //onSubmit={rule => console.log(rule)}
                      onSubmit={rule => dispatch(addRule(rule))}
                    
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                   >
                    <Form>
                        <Field type="text" name="title" component={RuleTitleField}  />
                        <ErrorMessage name="title" />
                        <Field type="text" name="description" component={RuleDescriptionField} />
                        <ErrorMessage name="description" />
                        <br/>
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>  
    );
    
};
const mapStateToProps = ({ rules }) => ({
    rules
  });

export default connect(
    mapStateToProps
)(RuleForm);
