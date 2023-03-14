import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';
import styles from './Colors.stories.emotion';

interface ColorProps {
  color: string;
  name: string;
}

const Color: React.FC<ColorProps> = ({ color, name }) => (
  <EuiFlexGroup direction="column" gutterSize="s">
    <EuiFlexItem grow={false}>
      <div
        className={styles.color}
        style={{
          background: color,
          border: name === "White" ? "1px solid black" : "none",
        }}
      />
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <EuiText>
        <p>{name}</p>
      </EuiText>
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <EuiText>
        <p>{color}</p>
      </EuiText>
    </EuiFlexItem>
  </EuiFlexGroup>
);

interface TextColorProps {
  color: string;
  name: string;
}

const TextColor: React.FC<TextColorProps> = ({ color, name }) => (
  <EuiText style={{ color }}>
    <p>
      {name} ({color})
    </p>
  </EuiText>
);

interface ColorsContainerProps {
  colors: Array<{ color: string; name: string }>;
  text?: boolean;
  title: string;
}

export const ColorsContainer: React.FC<ColorsContainerProps> = ({
  colors,
  text = false,
  title,
}) => (
  <EuiFlexGroup direction="column">
    <EuiFlexItem grow={false}>
      <EuiText>
        <h2 className={styles.header}>{title}</h2>
      </EuiText>
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      {text ? (
        <EuiFlexGroup direction="column" gutterSize="m">
          {colors.map((color, index) => (
            <EuiFlexItem key={`${color}-${index}`} grow={false}>
              <TextColor color={color.color} name={color.name} />
            </EuiFlexItem>
          ))}
        </EuiFlexGroup>
      ) : (
        <EuiFlexGroup gutterSize="xl" wrap>
          {colors.map((color, index) => (
            <EuiFlexItem key={`${color}-${index}`} grow={false}>
              <Color color={color.color} name={color.name} />
            </EuiFlexItem>
          ))}
        </EuiFlexGroup>
      )}
    </EuiFlexItem>
  </EuiFlexGroup>
);
