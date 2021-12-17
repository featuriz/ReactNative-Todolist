# TODO LIST

A personal todolist mobile application using [react-native](https://reactnative.dev/) [EXPO](https://expo.dev/)

## Configuration

| Dependency | Version |
| expo | ~43.0.2 |
| react | 17.0.1 |
| react-native | 0.64.3 |
| @react-native-async-storage/async-storage | ^1.15.14 |

## Intro

This is a simple to-do-list app. Only two options are there CREATE and DELETE. The data will be saved to local storage using [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/) library.

### Reverse Sort

Last things first approach.

## Validation

- Min 3 char or more
- Only new values

## Theme

Based on system theme, app color changes. Only two modes are there,

- light
- dark
  If it's not light then app switches to dark mode.

## Swipe

Swipe left to Delete

## Icon

A delete icon with red color will be displayed on clicking the list item. It's a small indication.

## Screen

As per Screen setting, App displays only requried part, (avoid notch)

- Helps better display for all devices
- Helps users to see all the system notification in all devices(mobile).
- Avoid camera notch area.

## DB

Data (list) will be saved locally on device itself.

- No REST API
- Local storage

## Finally

I'm using this app personally, and it's my default todo app.
