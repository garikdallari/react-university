import React from 'react'
import PropTypes from "prop-types"
import { PaperContainer } from './Paper.styles'

function Paper({children, gap}) {
    return (
        <PaperContainer gap={gap}>
            {children}
        </PaperContainer>
    )
};

Paper.defaultProps = {
    gap: "16",
}

Paper.propTypes = {
    children: PropTypes.node.isRequired,
    gap: PropTypes.string,
}


export default Paper
