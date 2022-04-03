import './myLabel.css';

export interface MyLabelProps {
    /**
    * Este es el contenido de la etiqueta
    */
    label?: string;
    /**
    * Este es el tamaño de la etiqueta
    */
    size?: 'normal'|'h1'|'h2'|'h3';
    /**
     * Muestra en mayuscula el contenido de la etiqueta
     */
    allCaps?: boolean;
    /**
     * Define el color del label
     */
    color?: 'primary'|'secondary'|'tertiary';
    /**
    * Define color personalizado para la etiqueta
    */
    fontColor?: 'string';

}

export const MyLabel = ({ 
    label = 'No label', 
    size = 'normal', 
    color = 'primary', 
    allCaps = false,
    fontColor
}: MyLabelProps) => {
  return (
        <span className={`label ${size} text-${color}`} style={{ color: fontColor }}>
            { !allCaps ? label : label.toUpperCase() }
        </span>
  )
}
