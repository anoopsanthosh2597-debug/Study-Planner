import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to your Java Study Plan App!\n");

        // Create a list to hold our study topics
        ArrayList<String> studyPlan = new ArrayList<>();
        studyPlan.add("1. Java Basics & Syntax");
        studyPlan.add("2. Control Flow (If/Else & Loops)");
        studyPlan.add("3. Object-Oriented Programming (Classes & Objects)");
        studyPlan.add("4. Collections & Data Structures");

        // Display the study plan
        System.out.println("Your Current Study Plan:");
        for (String topic : studyPlan) {
            System.out.println(topic);
        }
    }
}