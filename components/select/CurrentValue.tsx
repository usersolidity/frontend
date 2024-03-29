import type { SingleValueProps } from 'react-select'
import { components } from 'react-select'
import { networks } from '../../data/networks'
import styles from './Option.module.css'
import sharedStyles from '../../shared.module.css'
import type { Option } from '../../lib/types'

const { SingleValue } = components

export function CurrentValue<T extends Option>(props: SingleValueProps<T>) {
  return (
    <SingleValue {...props}>
      <span className={`${sharedStyles.row}`}>
        <span className={`${styles.collectionContainer}`}>
          {props.data.logo && (
            <img
              className={styles.collectionIcon}
              src={props.data.logo}
              height={24}
              width={24}
              alt={props.data.symbol}
            />
          )}
          {props.data.chainId && (
            <img
              height={14}
              width={14}
              style={{
                bottom: '0',
                right: '7.5px'
              }}
              className={styles.chainIdIcon}
              src={networks.find((chainId) => chainId.value === props.data.chainId)?.logo}
            />
          )}
        </span>
        {props.data.label}
      </span>
    </SingleValue>
  )
}
