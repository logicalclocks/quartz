import { Button as RebassButton, ButtonProps } from 'rebass';

// Styles
import styles from './footer-button.styles';

export interface QuartzFooterButtonProps extends Omit<ButtonProps, 'css'> {
  children: React.ReactNode;
  intent?: 'primary';
}

const FooterButton = ({
  intent = 'primary',
  children,
  ...props
}: QuartzFooterButtonProps) => (
  <RebassButton sx={styles} variant={`footer-${intent}`} {...props}>
    {children}
  </RebassButton>
);

export default FooterButton;
