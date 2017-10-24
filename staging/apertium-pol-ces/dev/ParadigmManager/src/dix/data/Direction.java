package dix.data;

/**
 *
 * @author Joanna Ruth
 */
public enum Direction {
    BOTH(""),
    LEFT_RIGHT("LR"),
    RIGHT_LEFT("RL");
    private final String symbol;

    public String getSymbol() {
        return symbol;
    }

    Direction(String symbol) {
        this.symbol = symbol;
    }

    public static Direction getDirection(String symbol) {
        for (Direction direction : Direction.values()) {
            if (direction.getSymbol().equals(symbol)) {
                return direction;
            }
        }
        return BOTH;
    }
}
