import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import { Text } from '../elements'
import device from 'themes/device'
// SVG Component
import CrossIcon from 'images/svg/help/cross.svg'

interface ReactInput extends React.ComponentPropsWithoutRef<'input'> {
    height?: string
    id?: string
    label?: string
    label_color?: string
    label_hover_color?: string
    tablet_background?: string
    inputColor?: string
    input_background?: string
    label_focus_color?: string
    labelSize?: string
    labelTop?: string
    handleError?: (
        current_input?: { focus?: () => void } & React.MutableRefObject<HTMLInputElement>,
    ) => void
}

type InputProps = ReactInput & InputWrapperProps & StyledInputProps & StyledLabelProps

type InputWrapperProps = {
    border?: string
    label_hover_color?: string
    focus_border?: string
    error?: string
    disabled?: boolean
}

type StyledInputProps = {
    input_background?: string
    inputColor?: string
    showLabel?: string
    label_focus_color?: string
    background?: string
    label?: string
    error?: string
}

type ValidProps = {
    background?: string
}

type StyledLabelProps = {
    label_color?: string
    tablet_background?: string
    error?: string
    htmlFor?: string
}

const RelativeWrapper = styled.div`
    position: relative;
`
const InputWrapper = styled.div<InputWrapperProps>`
    /* prettier-ignore */
    width: 100%;
    border: ${(props) => props.border || '1px solid var(--color-grey-2)'};
    border-radius: 16px;
    @media ${device.tabletL} {
        height: 5rem;
        border-radius: 4px;
    }

    &:hover {
        border-color: var(--color-grey-5);

        & > label {
            color: ${({ label_hover_color }) =>
                label_hover_color ? `var(--color-${label_hover_color})` : 'var(--color-black-3)'};
        }
    }

    ${(props) =>
        !props.error &&
        css`
            border-color: var(--color-grey-7);
        `}
    ${(props) =>
        props.error &&
        css`
            border-color: var(--color-red-1) !important;
            & > label {
                color: var(--color-red-1) !important;
            }
        `}
    ${(props) =>
        props.disabled &&
        css`
            opacity: 0.32;
            pointer-events: none;
        `}
`

const StyledError = styled.img`
    position: absolute;
    right: 0.8rem;
    top: 1.2rem;
    height: 1.6rem;
    width: 1.6rem;
    cursor: pointer;
    @media ${device.tablet} {
        right: 2rem;
        top: 1.6rem;
    }
    @media ${device.desktopL} {
        top: 1rem;
    }
`

const StyledInput = styled.input<StyledInputProps>`
    color: ${({ inputColor }) =>
        inputColor ? `var(--color-${inputColor})` : 'var(--color-black)'};
    font-size: var(--text-size-s);
    padding: 1rem 1rem 1rem 0.8rem;
    height: ${(props) => props.height || '40px'};
    width: 98%;
    display: block;
    border: none;
    border-radius: 16px;
    @media ${device.tabletL} {
        margin: 0 8px;
        width: 95%;
        height: 100%;
        border-radius: 15px;

        & ~ label {
            font-size: 1.75rem;
            top: 1.95rem;
        }
    }
    @media ${device.mobileL} {
        font-size: 14px;

        & ~ label {
            font-size: 1.5rem;
        }
    }

    &::placeholder {
        opacity: ${(props) => (props.showLabel ? 0 : 1)};
        transition: opacity 0.25s;
        padding-left: 0.3rem;
    }
    &:focus {
        outline: none;

        & ~ label {
            transform: translate(-0.6rem, -2rem) scale(0.7);
            background-color: ${({ background }) =>
                background ? `var(--color-${background})` : 'var(--color-grey-1)'};

            @media ${device.mobileL} {
                transform: translate(-0.6rem, -20px) scale(0.7);
            }
        }
        &::placeholder {
            opacity: 1;
            color: var(--color-grey-5);
            ${(props) =>
                props.label &&
                css`
                    font-size: 14px;
                `}
        }
    }
    &:valid {
        ${(props) =>
            props.value &&
            css<ValidProps>`
                & ~ label {
                    transform: translate(-0.6rem, -2rem) scale(0.7);
                    color: var(--color-grey-5);
                    background-color: ${({ background }) =>
                        background ? `var(--color-${background})` : 'var(--color-grey-1)'};

                    @media ${device.tabletL} {
                        top: 9px;
                    }
                }
            `}
    }
`

const ErrorMessages = styled(Text)`
    padding: 6px;
    font-size: 1.2rem;
    min-height: 16px;
    color: var(--color-red-1);
`

const StyledLabel = styled.label<StyledLabelProps>`
    color: ${({ label_color }) =>
        label_color ? `var(--color-${label_color})` : 'var(--color-grey)'};
    font-size: var(--text-size-xs);
    position: absolute;
    pointer-events: none;
    left: 0.8rem;
    top: 1.52rem;
    transition: 0.25s ease transform;
    transform: translateZ(0);
    padding: 0 0.45rem;
    background: none;
`

const Input = ({
    label = '',
    height = '',
    border = '',
    focus_border = '',
    label_hover_color,
    label_color = '',
    disabled,
    id = '',
    error = '',
    background = '',
    tablet_background = '',
    handleError,
    maxLength,
    ...props
}: InputProps) => {
    const current_input = useRef(null)

    return (
        <RelativeWrapper>
            <InputWrapper
                border={border}
                focus_border={focus_border}
                label_hover_color={label_hover_color}
                disabled={disabled}
                error={error}
                className="input-wrapper"
            >
                <StyledInput
                    id={id}
                    background={background}
                    maxLength={maxLength}
                    error={error}
                    disabled={disabled}
                    height={height}
                    showLabel={label}
                    {...props}
                    ref={current_input}
                />
                {label && (
                    <StyledLabel
                        tablet_background={tablet_background}
                        error={error}
                        htmlFor={id}
                        label_color={label_color}
                    >
                        {label}
                    </StyledLabel>
                )}
            </InputWrapper>
            <ErrorMessages lh="1.4" align="start">
                {error}
            </ErrorMessages>
            {error && (
                <StyledError
                    src={CrossIcon}
                    alt="error icon"
                    onClick={() => {
                        handleError(current_input)
                    }}
                />
            )}
        </RelativeWrapper>
    )
}

export default Input
