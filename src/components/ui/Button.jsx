import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  className = '',
  icon,
  iconPosition = 'right',
  disabled = false,
  type = 'button',
  motionProps = {},
  ...props 
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark focus-visible:ring-secondary',
    accent: 'bg-accent text-white hover:bg-accent-dark focus-visible:ring-accent',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary',
    'outline-secondary': 'bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white focus-visible:ring-secondary',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 focus-visible:ring-gray-500',
    link: 'bg-transparent text-primary underline hover:text-primary-dark p-0 focus-visible:ring-primary',
  };
  
  // Disabled classes
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`;
  
  // Icon rendering
  const renderIcon = () => {
    if (!icon) return null;
    return (
      <span className={`${iconPosition === 'left' ? 'mr-2' : 'ml-2'}`}>
        {icon}
      </span>
    );
  };
  
  // Content with icon
  const content = (
    <>
      {iconPosition === 'left' && renderIcon()}
      {children}
      {iconPosition === 'right' && renderIcon()}
    </>
  );
  
  // Render as motion component
  const MotionComponent = motion.button;
  
  // If href is provided, render as a link
  if (href) {
    return (
      <motion.div {...motionProps}>
        <Link 
          to={href} 
          className={buttonClasses} 
          {...props}
        >
          {content}
        </Link>
      </motion.div>
    );
  }
  
  // Otherwise render as a button
  return (
    <MotionComponent
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
      {...props}
    >
      {content}
    </MotionComponent>
  );
};

export default Button;