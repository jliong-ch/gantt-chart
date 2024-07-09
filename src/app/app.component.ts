import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  SchedulerEvent,
  SchedulerModule,
} from '@progress/kendo-angular-scheduler';
import { sampleData } from './random-data';

interface TimelineConfig {
  slotDivisions: number;
  slotDuration: number;
  numberOfDays: number;
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SchedulerModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private renderer: Renderer2) {}

  title = 'gantt chart';
  public selectedEvents: Set<number> = new Set();
  public TimelineConfig: TimelineConfig = {
    slotDivisions: 1,
    slotDuration: 1440,
    numberOfDays: 5,
  };
  public events: SchedulerEvent[] = sampleData;
  public selectedDate: Date = this.events[0].start;
  public resources: any[] = [
    {
      name: 'slots',
      data: [
        { text: '1-1', value: 1 },
        { text: '1-2', value: 2 },
        { text: '1-3', value: 3 },
        { text: '1-4', value: 4 },
        { text: '1-5', value: 5 },
        { text: '2-1', value: 6 },
        { text: '2-2', value: 7 },
        { text: '2-3', value: 8 },
        { text: '2-4', value: 9 },
        { text: '2-5', value: 10 },
        { text: '3-1', value: 11 },
        { text: '3-2', value: 12 },
        { text: '3-3', value: 13 },
        { text: '3-4', value: 14 },
        { text: '3-5', value: 15 },
      ],
      field: 'resourceId',
      valueField: 'value',
      textField: 'text',
    },
  ];
  public group: any = {
    resources: ['slots'],
    orientation: 'vertical',
  };

  public highlightRow(resourceId: number) {
    const eventElements = document.querySelectorAll(
      `.slot-button[resourceId="${resourceId}"]`
    );

    eventElements.forEach((element) => {
      const elementId = element.getAttribute('id');

      if (elementId) {
        this.selectedEvents.add(parseInt(elementId));
        this.renderer.addClass(element, 'highlighted');
      }
    });
  }

  public highlightButton(event: MouseEvent, item: SchedulerEvent) {
    const element = <HTMLTextAreaElement>event.target;

    if (this.selectedEvents.has(item.dataItem.id)) {
      this.selectedEvents.delete(item.dataItem.id);
      this.renderer.removeClass(element, 'highlighted');
    } else {
      this.selectedEvents.add(item.dataItem.id);
      this.renderer.addClass(element, 'highlighted');
    }
  }

  public printSelection() {
    return [...this.selectedEvents].join(', ');
  }
}
