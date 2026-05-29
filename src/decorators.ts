// Декоратор для додавання timestamp
export function withTimestamp<This, Args extends [string, ...any[]], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
): (this: This, ...args: Args) => Return {
  return function (this: This, ...args: Args): Return {
    const timestamp = new Date()
      .toISOString()
      .replace("T", " ")
      .substring(0, 19);

    const updatedArgs = [`[${timestamp}] ${args[0]}`, ...args.slice(1)] as Args;

    return originalMethod.call(this, ...updatedArgs);
  };
}

// Декоратор для перетворення в верхній регістр
export function uppercase<This, Args extends [string, ...any[]], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
): (this: This, ...args: Args) => Return {
  return function (this: This, ...args: Args): Return {
    const updatedArgs = [args[0].toUpperCase(), ...args.slice(1)] as Args;

    return originalMethod.call(this, ...updatedArgs);
  };
}