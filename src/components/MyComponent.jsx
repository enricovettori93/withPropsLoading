import withPropsLogging from "../hoc/withPropsLogging.jsx";

const MyComponent = (props) => `<Text>${props?.name}</Text>`;

export default withPropsLogging(MyComponent);