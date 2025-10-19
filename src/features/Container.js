import styled from "styled-components";
import PropTypes from "prop-types";
function Container({ children , className}) {
  return (
    <main className={className}>
      {children}
    </main>
  );
}

Container.propTypes = {
  Container: PropTypes.string,
};

export default styled(Container)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
`;