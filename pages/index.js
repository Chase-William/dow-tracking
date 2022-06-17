// https://nextui.org/docs/components

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ModalScanner from '../comps/ModalScanner'
import { Collapse, Grid, Text, Textarea } from '@nextui-org/react';
import React, { useEffect } from 'react'


export default function Home() {
  const getData = () => {
    return ([
      {
        "batchId": "0123456",
        "materialId": "2523513",
        "customerId": "5253241",
        "siteCreated": "3475 E North Union Rd, Bay City, MI 48706",
        "quantity": 20,
        "transits": [
          {
            "transitId": "352351",
            "dateTimeDeparture": "10:45:00 10/08/2022",
            "dateTimeReceived": "12:45:00 10/08/2022",
            "deliveredFrom": "3475 E North Union Rd, Bay City, MI 48706",
            "deliveredTo": "3475 E North Union Rd, Bay City, MI 48706",
            "transitType": "Train",
            "arrived": true
          },
          {
            "transitId": "235235",
            "dateTimeDeparture": "10:45:00 10/08/2022",
            "dateTimeReceived": "12:45:00 10/08/2022",
            "deliveredFrom": "3475 E North Union Rd, Bay City, MI 48706",
            "deliveredTo": "3475 E North Union Rd, Bay City, MI 48706",
            "transitType": "Train",
            "arrived": true
          },
          {
            "transitId": "325325",
            "dateTimeDeparture": "10:45:00 10/08/2022",
            "dateTimeReceived": "12:45:00 10/08/2022",
            "deliveredFrom": "3475 E North Union Rd, Bay City, MI 48706",
            "deliveredTo": "3475 E North Union Rd, Bay City, MI 48706",
            "transitType": "Train",
            "arrived": true
          }
        ],
        "sustainabilityMetrics": {
          "carbonEmission": 30,
          "electricityUsed": 20,
          "waterUsed": 10,
          "waste": [
            "Something",
            "Something Else",
            "Something More"
          ]
        },
        "rawMaterials": [
          "Something",
          "Something Else",
          "Something More"
        ]
      },
      {
        "batchId": "6543210",
        "materialId": "2523513",
        "customerId": "5253241",
        "siteCreated": "3475 E North Union Rd, Bay City, MI 48706",
        "quantity": 20,
        "transits": [
          {
            "transitId": "352351",
            "dateTimeDeparture": "10:45:00 10/08/2022",
            "dateTimeReceived": "12:45:00 10/08/2022",
            "deliveredFrom": "3475 E North Union Rd, Bay City, MI 48706",
            "deliveredTo": "3475 E North Union Rd, Bay City, MI 48706",
            "transitType": "Train",
            "arrived": true
          },
          {
            "transitId": "235235",
            "dateTimeDeparture": "10:45:00 10/08/2022",
            "dateTimeReceived": "12:45:00 10/08/2022",
            "deliveredFrom": "3475 E North Union Rd, Bay City, MI 48706",
            "deliveredTo": "3475 E North Union Rd, Bay City, MI 48706",
            "transitType": "Train",
            "arrived": true
          },
          {
            "transitId": "325325",
            "dateTimeDeparture": "10:45:00 10/08/2022",
            "dateTimeReceived": "12:45:00 10/08/2022",
            "deliveredFrom": "3475 E North Union Rd, Bay City, MI 48706",
            "deliveredTo": "3475 E North Union Rd, Bay City, MI 48706",
            "transitType": "Train",
            "arrived": true
          }
        ],
        "sustainabilityMetrics": {
          "carbonEmission": 30,
          "electricityUsed": 20,
          "waterUsed": 10,
          "waste": [
            "Something",
            "Something Else",
            "Something More"
          ]
        },
        "rawMaterials": [
          "Something",
          "Something Else",
          "Something Less"
        ]
      }
    ])
  }

  const [materials, setMaterials] = React.useState(new Map())
  const [currentMaterial, setCurrentMaterial] = React.useState()



  const handleMaterialScanned = (text) => {
    if (!materials.has(text)) {
      // Find current material from example data and set
      const mat = getData().find(batch => batch.batchId == text)
      setMaterials(materials.set(text, mat))
      setCurrentMaterial(mat)
    } else {
      console.log(materials.get(text))
      setCurrentMaterial(materials.get(text))
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Dow Track Pack</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {currentMaterial !== null ?
          <Grid.Container gap={2}>
            <Grid xs={8}>
              <Text 
                css={{textGradient: "45deg, $purple600 -20%, $pink600 100%"}}
                size={30}
                >
                  Dow Tracking System
                </Text>
            </Grid>
            <Grid xs={4}>
              <ModalScanner
                materials={materials}
                handleMaterialScanned={handleMaterialScanned}
              />
            </Grid>
          </Grid.Container> :
          <>
            <h3 className={styles.title} >
              Dow Track Pack
            </h3>
            <Text css={{textGradient: "45deg, $purple600 -20%, $pink600 100%"}}></Text>
            <ModalScanner
              materials={materials}
              handleMaterialScanned={handleMaterialScanned}
            />
          </>
        }

        {currentMaterial != null &&
          <>
            <Textarea
              readOnly
              label="Batch Id"
              value={currentMaterial.batchId}
              placeholder="N/A"
              minRows={1}
              width={'100%'}
            />
            <Grid.Container gap={1.5} justify="center">
              <Grid xs>
                <Textarea
                  readOnly
                  label="Material Id"
                  placeholder="N/A"
                  value={currentMaterial.materialId}
                  minRows={1}
                  width={'100%'}
                />
              </Grid>
              <Grid xs>
                <Textarea
                  readOnly
                  label="Material Name"
                  placeholder="N/A"
                  value="HDBP"
                  minRows={1}
                  width={'100%'}
                />
              </Grid>
            </Grid.Container>
            <Grid.Container gap={1.5}>
              <Grid xs={4}>
                <Textarea
                  readOnly
                  label="Customer Id"
                  value={currentMaterial.customerId}
                  placeholder="N/A"
                  minRows={1}
                  width={'100%'}
                />
              </Grid>
              <Grid xs={8}>
                <Textarea
                  readOnly
                  label="Customer"
                  value="Jeff"
                  placeholder="N/A"
                  minRows={1}
                  width={'100%'}
                />
              </Grid>
            </Grid.Container>
            <Textarea
              readOnly
              label="Site Created"
              value={currentMaterial.siteCreated}
              placeholder="3475 E North Union Rd, Bay City, MI 48706"
              minRows={1}
              width={'100%'}
            />
            <Textarea
              readOnly
              label="Quantity"
              placeholder="0"
              value={currentMaterial.quantity}
              minRows={1}
              width={'100%'}
            />

            <div>
              {/* Transit Info */}
              <Collapse.Group>
                <Collapse title="Transit Info">
                  {currentMaterial.transits.map(transit => {
                    return (
                      <Collapse.Group key={transit.transitId}>
                        <Collapse title={'Id: ' + transit.transitId}>
                          <Textarea
                            readOnly
                            label="Transit Id"
                            placeholder="N/A"
                            value={transit.transitId}
                            minRows={1}
                            width={'100%'}
                          />
                          <Grid.Container gap={1.5} justify="center">
                            <Grid xs>
                              <Textarea
                                readOnly
                                label="Date & Time Departure"
                                placeholder="N/A"
                                value={transit.dateTimeDeparture}
                                minRows={1}
                                width={'100%'}
                              />
                            </Grid>
                            <Grid xs>
                              <Textarea
                                readOnly
                                label="Date & Time Received"
                                placeholder="N/A"
                                value={transit.dateTimeReceived}
                                minRows={1}
                                width={'100%'}
                              />
                            </Grid>
                          </Grid.Container>
                          <Textarea
                            readOnly
                            label="Delivered From"
                            placeholder="N/A"
                            value={transit.deliveredFrom}
                            minRows={1}
                            width={'100%'}
                          />
                          <Textarea
                            readOnly
                            label="Delivered To"
                            placeholder="N/A"
                            value={transit.deliveredTo}
                            minRows={1}
                            width={'100%'}
                          />
                          <Grid.Container gap={1.5} justify="center">
                            <Grid xs>
                              <Textarea
                                readOnly
                                label="Transit Type"
                                placeholder="N/A"
                                value={transit.transitType}
                                minRows={1}
                                width={'100%'}
                              />
                            </Grid>
                            <Grid xs>
                              <Textarea
                                readOnly
                                label="Arrived"
                                placeholder="No"
                                value={transit.arrived ? 'Yes' : 'No'}
                                minRows={1}
                                width={'100%'}
                              />
                            </Grid>
                          </Grid.Container>
                        </Collapse>
                      </Collapse.Group>
                    )
                  })}
                </Collapse>
              </Collapse.Group>

              {/* Sustainability Metrics */}
              <Collapse.Group>
                <Collapse title="Sustainability Metrics">
                  <Textarea
                    readOnly
                    label="Carbon Emission"
                    placeholder="0"
                    value={currentMaterial.sustainabilityMetrics.carbonEmission + 'mt'}
                    minRows={1}
                    width={'100%'}
                  />
                  <Grid.Container gap={1.5} justify='center'>
                    <Grid xs>
                      <Textarea
                        readOnly
                        label="Electricity Used"
                        placeholder="0"
                        value={currentMaterial.sustainabilityMetrics.electricityUsed + 'mw'}
                        minRows={1}
                        width={'100%'}
                      />
                    </Grid>
                    <Grid xs>
                      <Textarea
                        readOnly
                        label="Water Used"
                        placeholder="0"
                        value={currentMaterial.sustainabilityMetrics.waterUsed + 'g'}
                        minRows={1}
                        width={'100%'}
                      />
                    </Grid>
                  </Grid.Container>
                  <Textarea
                    readOnly
                    label='Waste Products'
                    value={currentMaterial.sustainabilityMetrics.waste.join(', ')}
                    width={'100%'}
                    rows={2}
                  />
                </Collapse>
              </Collapse.Group>

              {/* Raw Materials */}
              <Textarea
                readOnly
                label='Raw Materials'
                value={currentMaterial.rawMaterials.join(', ')}
                width={'100%'}
                rows={2}
              />

              {/* <Collapse.Group>
                {
                  materials.map(value => {
                    return (
                      <Collapse title={'Item: ' + value} key={value}>
                        <Text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat.
                        </Text>
                        <Textarea
                          label="asdasd"
                          placeholder="asdas"
                        />
                      </Collapse>
                    )
                  })
                }
              </Collapse.Group> */}
            </div>
          </>
        }
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}