import styles from "@/styles/advisory-subscription/PackagesMobile.module.css"
import {firstPackageData, secondPackageData, unlimitedPackageData, unlimitedPlusPackageData} from "@/data/packagesData";

export default function PackagesMobile() {
    return(
        <div className={styles.wrapperDiv}>
            <div className={styles.package}>
                <p className={styles.titleName}>1h package</p>
                <p className={styles.titlePrice}>5.000$</p>
                {
                    firstPackageData.map((rowData, i) => {
                        return(
                            <div className={styles.wrapperTable} key={i.toString()}>
                                <div className={styles.cell1}>
                                    {rowData.cell1}
                                </div>
                                <div className={styles.cell2}>
                                    {rowData.cell2}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.package}>
                <p className={styles.titleName}>2h package</p>
                <p className={styles.titlePrice}>8.500$</p>
                {
                    secondPackageData.map((rowData, i) => {
                        return(
                            <div className={styles.wrapperTable} key={i.toString()}>
                                <div className={styles.cell1}>
                                    {rowData.cell1}
                                </div>
                                <div className={styles.cell2}>
                                    {rowData.cell2}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.package}>
                <p className={styles.titleName}>Unlimited package</p>
                <p className={styles.titlePrice}>20.000$</p>
                {
                    unlimitedPackageData.map((rowData, i) => {
                        return(
                            <div className={styles.wrapperTable} key={i.toString()}>
                                <div className={styles.cell1}>
                                    {rowData.cell1}
                                </div>
                                <div className={styles.cell2}>
                                    {rowData.cell2}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.package}>
                <p className={styles.titleName}>Unlimited+ package</p>
                <p className={styles.titlePrice}>Negotiated</p>
                {
                    unlimitedPlusPackageData.map((rowData, i) => {
                        return(
                            <div className={styles.wrapperTable} key={i.toString()}>
                                <div className={styles.cell1}>
                                    {rowData.cell1}
                                </div>
                                <div className={styles.cell2}>
                                    {rowData.cell2}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}