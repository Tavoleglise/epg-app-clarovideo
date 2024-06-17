import React from "react";
import { afterEach, describe, test, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";
import EventsTable from "../src/components/schedule/eventsTable/EventsTable";
import ChannelInformationTable from "../src/components/schedule/channelInformationTable/ChannelInformationTable";
import { mock } from "../src/db/mock-info";
import { requestDataAdapter } from "../src/utilities/adapters.utilities";

describe("<App />", () => {
  afterEach(() => {
    cleanup();
  });
  test("Should open modal and render app correctly", async () => {
    const user = userEvent.setup();
    render(<App />);
    screen.debug();
    const button = screen.getByRole("button", { name: "Open EPG" });
    expect(button).toBeDefined();

    await user.click(button);

    const modalContent = screen.getByText("No event selected");
    expect(modalContent).toBeDefined();

    const closeButton = screen.getByRole("button", { name: "Close" });
    expect(closeButton).toBeDefined();

    const select = screen.getByTestId("select");
    expect(select).toBeDefined();

    const datePicker = screen.getByTestId("date-picker");
    expect(datePicker).toBeDefined();
  });

  test("Should render channels and events correctly", async () => {
    render(
      <ChannelInformationTable
        channels={requestDataAdapter(mock.response.channels)}
      />
    );
    render(
      <EventsTable
        handleEventSelection={() => {}}
        channels={requestDataAdapter(mock.response.channels)}
      />
    );
    screen.debug();
    const channelScheduleContainer = screen.getByTestId(
      "channelScheduleContainer"
    );
    expect(channelScheduleContainer).toBeDefined();

    const channelScheduleContainerCount =
      channelScheduleContainer.children.length;
    expect(channelScheduleContainerCount).toBeGreaterThan(1);

    const channelHeadsContainer = screen.getByTestId("channelHeadsContainer");
    expect(channelHeadsContainer).toBeDefined();
    const channelHeadsContainerCount = channelHeadsContainer.children.length;
    expect(channelHeadsContainerCount).toBeGreaterThan(0);

    expect(channelHeadsContainerCount).toBe(channelScheduleContainerCount - 1);
  });
});
