function map(from, to, opts) {
  const manipulator = {
    type: "basic",
    from: {
      key_code: from,
      modifiers: { optional: ["any"] },
    },
  };

  if (typeof to === "string") {
    manipulator.to = [{
      key_code: to,
    }];
  } else if (Array.isArray(to)) {
    manipulator.to = [{
      modifiers: to.slice(0, -1),
      key_code: to[to.length - 1],
    }];
  } else if (to && to.layer) {
    manipulator.to = [{
      set_variable: { name: to.layer, value: true, key_up_value: false },
    }];
  }

  if (opts && opts.layer) {
    manipulator.conditions = [{
      type: "variable_if",
      name: opts.layer,
      value: true,
    }];
  }

  return manipulator;
}

({
  description: "substan41",
  manipulators: [
    // fn ------------------------------------------------------------------------------------------
    // left hand
    map("q", "f1", { layer: "fn" }),
    map("w", "f2", { layer: "fn" }),
    map("e", "f3", { layer: "fn" }),
    map("r", "f4", { layer: "fn" }),

    map("a", "f5", { layer: "fn" }),
    map("s", "f6", { layer: "fn" }),
    map("d", "f7", { layer: "fn" }),
    map("f", "f8", { layer: "fn" }),

    map("z", "f9", { layer: "fn" }),
    map("x", "f10", { layer: "fn" }),
    map("c", "f11", { layer: "fn" }),
    map("v", "f12", { layer: "fn" }),

    // right hand
    map("j", "left_shift", { layer: "fn" }),
    map("k", "left_option", { layer: "fn" }),

    // num -----------------------------------------------------------------------------------------
    // left hand
    map("q", "1", { layer: "num" }),
    map("w", "2", { layer: "num" }),
    map("e", "3", { layer: "num" }),
    map("r", "4", { layer: "num" }),

    map("a", "5", { layer: "num" }),
    map("s", "6", { layer: "num" }),
    map("d", "7", { layer: "num" }),
    map("f", "8", { layer: "num" }),

    map("z", "9", { layer: "num" }),
    map("x", "0", { layer: "num" }),
    map("c", "hyphen", { layer: "num" }),
    map("v", "equal_sign", { layer: "num" }),

    // right hand
    map("u", "volume_decrement", { layer: "num" }),
    map("i", "volume_increment", { layer: "num" }),

    map("j", "left_shift", { layer: "num" }),
    map("k", "left_option", { layer: "num" }),
    map("l", { layer: "fn" }, { layer: "num" }),

    map("m", "display_brightness_decrement", { layer: "num" }),
    map("comma", "display_brightness_increment", { layer: "num" }),

    map("spacebar", ["control", "spacebar"], { layer: "num" }),

    // nav -----------------------------------------------------------------------------------------
    // left hand
    map("e", ["shift", "command", "open_bracket"], { layer: "nav" }),
    map("r", ["shift", "command", "close_bracket"], { layer: "nav" }),

    map("s", "return_or_enter", { layer: "nav" }),
    map("d", "left_option", { layer: "nav" }),
    map("f", "left_shift", { layer: "nav" }),

    map("c", ["command", "open_bracket"], { layer: "nav" }),
    map("v", ["command", "close_bracket"], { layer: "nav" }),

    // right hand
    map("u", "delete_or_backspace", { layer: "nav" }),
    map("i", "up_arrow", { layer: "nav" }),
    map("o", "delete_forward", { layer: "nav" }),
    map("p", "caps_lock", { layer: "nav" }),

    map("j", "left_arrow", { layer: "nav" }),
    map("k", "down_arrow", { layer: "nav" }),
    map("l", "right_arrow", { layer: "nav" }),
    map("semicolon", "grave_accent_and_tilde", { layer: "nav" }),

    map("m", "open_bracket", { layer: "nav" }),
    map("comma", "close_bracket", { layer: "nav" }),
    map("period", "semicolon", { layer: "nav" }),
    map("slash", "backslash", { layer: "nav" }),

    // default -------------------------------------------------------------------------------------
    map("caps_lock", { layer: "nav" }),
    map("left_control", { layer: "nav" }), // For HHKB
    map("open_bracket", "escape"),
    map("semicolon", "quote"),
    map("quote", { layer: "num" }),
    map("right_command", "right_control"),
    map("grave_accent_and_tilde", "left_shift"), // For UK Macbook
  ],
});
