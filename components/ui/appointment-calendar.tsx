import { CalendarDays } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from './button';
import { Calendar } from './calendar';
import { Card } from './card';
import { Input } from './input';

/**
 * Represents a time slot for an appointment
 */
type TimeSlot = {
  readonly start: Date;
  readonly end: Date;
};

/**
 * Represents the company's working hours
 */
type CompanyHours = {
  readonly start: number;
  readonly end: number;
};

const COMPANY_HOURS: CompanyHours = {
  start: 9,
  end: 17,
} as const;

const SLOT_DURATION_MINUTES = 90;

/**
 * Generates available time slots for a given date based on company hours
 * @param date - The date to generate slots for
 * @returns Array of available time slots
 */
function getSlotsForDay(date: Date): readonly TimeSlot[] {
  const day = date.getDay();
  if (day === 0 || day === 6) {
    return [];
  }
  const slots: TimeSlot[] = [];
  const start = new Date(date);
  start.setHours(COMPANY_HOURS.start, 0, 0, 0);
  const end = new Date(date);
  end.setHours(COMPANY_HOURS.end, 0, 0, 0);
  let slot = new Date(start);
  while (slot.getTime() + SLOT_DURATION_MINUTES * 60000 <= end.getTime()) {
    const slotEnd = new Date(slot.getTime() + SLOT_DURATION_MINUTES * 60000);
    slots.push({
      start: new Date(slot),
      end: slotEnd,
    });
    slot = slotEnd;
  }
  return slots;
}

export default function AppointmentCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const slots = selectedDate ? getSlotsForDay(selectedDate) : [];

  /**
   * Handles the appointment booking form submission
   * @param e - The form event
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!selectedDate || selectedSlot === null || !name || !email) {
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success('Appointment booked successfully!');
      setSubmitting(false);
      setSelectedDate(undefined);
      setSelectedSlot(null);
      setName('');
      setEmail('');
    }, 1000);
  };

  return (
    <Card className="flex-1 h-full rounded-3xl shadow-sm overflow-hidden bg-card/50 border border-border flex flex-col justify-stretch">
      <div className="flex flex-col md:flex-row md:gap-6 w-full h-full">
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 md:py-8 min-w-0">
          <div className="text-lg font-bold mb-2 text-card-foreground text-center md:text-left">Book Appointment</div>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              setSelectedDate(date);
              setSelectedSlot(null);
            }}
            disabled={date => date.getDay() === 0 || date.getDay() === 6}
            className="rounded-md border-0 w-full max-w-xs mx-auto"
          />
          <div className="mt-2 text-xs text-muted-foreground text-center">
            Time zone – Eastern time · US & Canada
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 md:py-8 min-w-0">
          <form className="w-full max-w-xs mx-auto flex flex-col justify-center h-full" onSubmit={handleSubmit}>
            <div className="text-base font-semibold text-card-foreground text-center md:text-left">
              {selectedDate
                ? selectedDate.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })
                : 'Pick a date'}
            </div>
            <div className="flex flex-col gap-2 flex-1 justify-center">
              {selectedDate && slots.length > 0
                ? (
                    slots.map(slot => (
                      <div key={crypto.randomUUID()} className="flex gap-2">
                        <Button
                          type="button"
                          variant={selectedSlot === slot.start.getTime() ? 'default' : 'outline'}
                          className="flex-1 text-sm justify-center"
                          onClick={() => setSelectedSlot(slot.start.getTime())}
                        >
                          {slot.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </Button>
                      </div>
                    ))
                  )
                : (
                    <div className="flex flex-col items-center justify-center py-8 text-muted-foreground gap-2">
                      <CalendarDays className="w-8 h-8 opacity-60" />
                      <span className="text-sm">Select a date to view available time slots</span>
                    </div>
                  )}
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={submitting}
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={submitting}
                required
              />
            </div>
            <Button
              type="submit"
              className="mt-4 w-full"
              disabled={
                !selectedDate || selectedSlot === null || !name || !email || submitting
              }
            >
              {submitting ? 'Booking...' : 'Book Appointment'}
            </Button>
          </form>
        </div>
      </div>
    </Card>
  );
}
