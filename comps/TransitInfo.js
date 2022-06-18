import { Collapse, Textarea, Grid } from "@nextui-org/react"

export function TransitInfo({ transits }) {
  return (
    <Collapse.Group>
      <Collapse title="Transit Info">
        {transits.map(transit => {
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
    </Collapse.Group >
  )
}